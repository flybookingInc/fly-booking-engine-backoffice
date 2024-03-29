import { defineStore } from 'pinia'
import { reactive, unref } from 'vue'
import type { HotelDetails } from '@/types/stores/property'
import { getPropertyApi, putPropertyApi } from '@/api/setting/property'
import { GetPropertyRequest } from '@/types/api/property/getProperty'
import { useUserStore } from '@/store/modules/user'
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
    if (!propertyId && !user.currentPropertylId) throw new Error('propertyId is null')
    const res = await getPropertyApi({
      property_id: propertyId ?? user.currentPropertylId
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

  return {
    hotelDetails,
    FetchHotelDetails,
    updateProperty
  }
})
