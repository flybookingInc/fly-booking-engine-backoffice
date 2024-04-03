import { defineStore } from 'pinia'
import { reactive, unref } from 'vue'
import type { HotelDetails, RoomTypeDetail } from '@/types/stores/property'
import { getPropertyApi, putPropertyApi } from '@/api/setting/property'
import { GetPropertyRequest } from '@/types/api/property/getProperty'
import { useUserStore } from '@/store/modules/user'
import { getRoomTypeApi, getRoomTypesApi } from '@/api/setting/roomType'
import { GetRoomTypeRequest } from '@/types/api/roomType/getRoomType'
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
   * Fetches the details of room types for a given property.
   *
   * @param propertyId - The ID of the property.
   * @returns A promise that resolves to an array of RoomTypeDetail objects.
   * @throws An error if the API response status is not 200 or if there is an error message in the response data.
   */
  const fetchRoomTypes = async (propertyId: string): Promise<RoomTypeDetail[]> => {
    const res = await getRoomTypesApi({
      property_id: propertyId
    } as GetRoomTypeRequest)
    if (res.status !== 200 && res.data) {
      throw new Error(res.data.message)
    }
    return res.data.data as RoomTypeDetail[]
  }

  return {
    hotelDetails,
    FetchHotelDetails,
    fetchRoomTypeDetail,
    fetchRoomTypes,
    updateProperty
  }
})
