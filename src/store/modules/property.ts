import { defineStore } from 'pinia'
import { reactive, unref } from 'vue'
import type { HotelDetails, RoomTypeDetail, RatePlanDetail } from '@/types/stores/property'
import { getPropertyApi, putPropertyApi } from '@/api/setting/property'
import { GetPropertyRequest } from '@/types/api/property/getProperty'
import { useUserStore } from '@/store/modules/user'
import {
  getRoomTypeApi,
  getRoomTypesApi,
  getPmsRoomTypesApi,
  putRoomTypesApi
} from '@/api/setting/roomType'
import { GetRoomTypeRequest } from '@/types/api/roomType/getRoomType'
import { GetRoomTypesRequest } from '@/types/api/roomType/getRoomTypes'
import { GetRatePlanRequest } from '@/types/api/ratePlan/getRatePlan'
import { GetRatePlansRequest } from '@/types/api/ratePlan/getRatePlans'
import {
  getRatePlansApi,
  getRatePlanApi,
  getPmsRatePlansApi,
  putRatePlansApi
} from '@/api/setting/ratePlan'
export const usePropertyStore = defineStore('propertyStore', () => {
  const hotelDetails = reactive<HotelDetails>({} as HotelDetails)

  /**
   * Loads the hotel details for the specified property ID or the current user's property ID.
   * @param propertyId - The ID of the property to load the details for. If not provided, the current user's property ID will be used.
   * @returns {Promise<HotelDetails>} A promise that resolves with the hotel details.
   * @throws {Error} - Throws an error if the property ID is null or if the API response has an error message.
   */
  const FetchHotelDetails = async (propertyId?: string): Promise<HotelDetails> => {
    const user = useUserStore()
    if (!propertyId && !user.currentPropertyId) throw new Error('propertyId is null')
    const res = await getPropertyApi({
      property_id: propertyId ?? user.currentPropertyId
    } as GetPropertyRequest)
    if (res.status !== 200 && res.data) {
      throw new Error(res.data.message)
    }
    return res.data.data as HotelDetails
  }

  /**
   * Updates a property with the provided data.
   * If no data is provided, it uses the current `hotelDetails` value.
   * @param data - The data to update the property with.
   * @returns A Promise that resolves to void.
   * @throws An Error if the API response contains a message.
   */
  const updateProperty = async (data?: HotelDetails): Promise<void> => {
    const res = await putPropertyApi({ data: data ?? unref(hotelDetails) })
    if (res?.data?.message) {
      throw new Error(res.data.message)
    }
  }

  /**
   * Fetches the details of a specific room type for a given property.
   *
   * @param propertyId - The ID of the property.
   * @param roomTypeId - The ID of the room type.
   * @returns A promise that resolves to the room type detail.
   * @throws An error if the API response status is not 200 or if there is an error message in the response data.
   */
  const fetchRoomTypeDetail = async (
    propertyId: string,
    roomTypeId: string
  ): Promise<RoomTypeDetail> => {
    const res = await getRoomTypeApi({
      property_id: propertyId,
      room_type_id: roomTypeId
    } as GetRoomTypeRequest)
    if (res.status !== 200 && res.data) {
      throw new Error(res.data.message)
    }
    return res.data.data as RoomTypeDetail
  }

  /**
   * Import room type from PMS
   * @param pmsPropertyId - The ID of the property in PMS.
   */
  const importRoomTypes = async (pmsPropertyId: string): Promise<void> => {
    // 1. 從PMS取得房型資料
    const res = await getPmsRoomTypesApi({ pms_property_id: pmsPropertyId })
    if (res.status !== 200 || res.data.message || !res.data.data) {
      throw new Error(res.data.message)
    }
    // 2. 將房型資料存入hotelDetails
    const pmsRoomTypes = res.data.data
    pmsRoomTypes?.forEach((roomType) => {
      setRoomTypeDetail(roomType)
    })
    // 3. 更新database
    await putRoomTypesApi({
      data: hotelDetails.room_type_details,
      property_id: hotelDetails.property_id
    })
  }

  /**
   * Fetches the details of room types for a given property.
   *
   * @param propertyId - The ID of the property.
   * @returns A promise that resolves to an array of RoomTypeDetail objects.
   * @throws An error if the API response status is not 200 or if there is an error message in the response data.
   */
  const fetchRoomTypes = async (propertyId: string): Promise<RoomTypeDetail[]> => {
    const res = await getRoomTypesApi({
      property_id: propertyId
    } as GetRoomTypesRequest)
    if (res.status !== 200 && res.data) {
      throw new Error(res.data.message)
    }
    return res.data.data as RoomTypeDetail[]
  }

  /**
   * add or replace the room type detail in the hotel details
   * @param roomTypeDetail - The room type detail to add or replace.
   */
  const setRoomTypeDetail = (roomTypeDetail: RoomTypeDetail): void => {
    const roomTypeIndex = hotelDetails.room_type_details.findIndex(
      (roomType) => roomType.room_type_id === roomTypeDetail.room_type_id
    )
    if (roomTypeIndex === -1) {
      hotelDetails.room_type_details.push(roomTypeDetail)
    } else {
      hotelDetails.room_type_details.splice(roomTypeIndex, 1, roomTypeDetail)
    }
  }

  /**
   * Fetch Detail of Rate Plan for a given property
   * @param propertyId - The ID of the property.
   * @returns A promise that resolves to an array of RatePlanDetail objects.
   * @throws An error if the API response status is not 200 or if there is an error message in the response data.
   */
  const fetchRatePlans = async (propertyId: string): Promise<RatePlanDetail[]> => {
    const res = await getRatePlansApi({
      property_id: propertyId
    } as GetRatePlansRequest)
    if (res.status !== 200 && res.data) {
      throw new Error(res.data.message)
    }
    return res.data.data as RatePlanDetail[]
  }

  /**
   * Fetches the details of a specific rate plan for a given property.
   *
   * @param propertyId - The ID of the property.
   * @param ratePlanId - The ID of the rate plan.
   * @returns A promise that resolves to the rate plan detail.
   * @throws An error if the API response status is not 200 or if there is an error message in the response data.
   */
  const fetchRatePlanDetail = async (
    propertyId: string,
    ratePlanId: string
  ): Promise<RatePlanDetail> => {
    const res = await getRatePlanApi({
      property_id: propertyId,
      rate_plan_id: ratePlanId
    } as GetRatePlanRequest)
    if (res.status !== 200 && res.data) {
      throw new Error(res.data.message)
    }
    return res.data.data as RatePlanDetail
  }

  // Import Rate Plans from PMS
  const importRatePlans = async (pmsPropertyId: string): Promise<void> => {
    // 1. 從PMS取得Rate Plan資料
    const res = await getPmsRatePlansApi({ pms_property_id: pmsPropertyId })
    if (res.status !== 200 || res.data.message || !res.data.data) {
      throw new Error(res.data.message)
    }
    // 2. 將Rate Plan資料存入hotelDetails
    const pmsRatePlans = res.data.data
    pmsRatePlans?.forEach((ratePlan) => {
      setRatePlanDetail(ratePlan)
    })
    // 3. 更新database
    await putRatePlansApi({
      data: hotelDetails.rate_plan_details,
      property_id: hotelDetails.property_id
    })
  }

  /**
   * add or replace the rate plan detail in the hotel details
   * @param ratePlanDetail - The rate plan detail to add or replace.
   */
  const setRatePlanDetail = (ratePlanDetail: RatePlanDetail): void => {
    const ratePlanIndex = hotelDetails.rate_plan_details.findIndex(
      (ratePlan) => ratePlan.rate_plan_id === ratePlanDetail.rate_plan_id
    )
    if (ratePlanIndex === -1) {
      hotelDetails.rate_plan_details.push(ratePlanDetail)
    } else {
      hotelDetails.rate_plan_details.splice(ratePlanIndex, 1, ratePlanDetail)
    }
  }

  return {
    hotelDetails,
    FetchHotelDetails,
    fetchRoomTypeDetail,
    fetchRoomTypes,
    importRoomTypes,
    updateProperty,
    setRoomTypeDetail,
    fetchRatePlans,
    fetchRatePlanDetail,
    setRatePlanDetail,
    importRatePlans
  }
})
