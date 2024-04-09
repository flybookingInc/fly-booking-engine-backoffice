import request from '@/axios'
import {
  GetAvailableLanguagesResponse,
  GetAvailableAmenitiesResponse,
  GetAvailableCurrenciesResponse,
  GetAvailableServicesResponse,
  GetAvailableCreditCardsResponse,
  GetAvailableRoomTypeStatusesResponse,
  GetAvailableTvCastingResponse,
  GetAvailableTvContentResponse,
  GetAvailableTvResolutionResponse,
  GetAvailableFloorTypeResponse,
  GetAvailableWifiAvailabilityResponse,
  GetAvailableWifiSpecificationResponse,
  GetAvailableWiredInternetAvailabilityResponse,
  GetAvailableRoomBathRoomFacilityResponse,
  GetAvailableRoomBedroomAndLaundryFacilityResponse,
  GetAvailableRoomFacilityResponse,
  GetAvailableRoomEntertainmentFacilityResponse,
  GetAvailableRoomFamilyFacilityResponse,
  GetAvailableRoomHeatingAndCoolingFacilityResponse,
  GetAvailableRoomInternetAndOfficeFacilityResponse,
  GetAvailableRoomKitchenAndDiningFacilityResponse,
  GetAvailableRoomSafetyFacilityResponse,
  GetAvailableRoomViewResponse,
  GetAvailablePillowTypeResponse,
  GetAvailablePillowFirmnessResponse,
  GetAvailableRatePlanStatusResponse,
  GetAvailableRatePlanAllowedResponse,
  GetAvailableRatePlanIncludedResponse
} from '@/types/api/system'
import type { AxiosResponse } from 'axios'

export const getAvailableLanguagesApi = (): Promise<
  AxiosResponse<GetAvailableLanguagesResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableLanguages' })
}

export const getAvailableAmenitiesApi = (): Promise<
  AxiosResponse<GetAvailableAmenitiesResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableAmenities' })
}

export const getAvailableCurrenciesApi = (): Promise<
  AxiosResponse<GetAvailableCurrenciesResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableCurrencies' })
}

export const getAvailableServicesApi = (): Promise<AxiosResponse<GetAvailableServicesResponse>> => {
  return request.get({ url: '/mock/system/getAvailableServices' })
}

export const getAvailableCreditCardsApi = (): Promise<
  AxiosResponse<GetAvailableCreditCardsResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableCreditCards' })
}

export const getAvailableRoomTypeStatusesApi = (): Promise<
  AxiosResponse<GetAvailableRoomTypeStatusesResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomTypeStatuses' })
}

export const getAvailableTvCastingApi = (): Promise<
  AxiosResponse<GetAvailableTvCastingResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableTvCasting' })
}

export const getAvailableTvContentApi = (): Promise<
  AxiosResponse<GetAvailableTvContentResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableTvContent' })
}

export const getAvailableTvResolutionApi = (): Promise<
  AxiosResponse<GetAvailableTvResolutionResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableTvResolution' })
}

export const getAvailableFloorTypeApi = (): Promise<
  AxiosResponse<GetAvailableFloorTypeResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableFloorType' })
}

export const getAvailableWifiAvailabilityApi = (): Promise<
  AxiosResponse<GetAvailableWifiAvailabilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableWifiAvailability' })
}

export const getAvailableWifiSpecificationApi = (): Promise<
  AxiosResponse<GetAvailableWifiSpecificationResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableWifiSpecification' })
}

export const getAvailableWiredInternetAvailabilityApi = (): Promise<
  AxiosResponse<GetAvailableWiredInternetAvailabilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableWiredInternetAvailability' })
}

export const getAvailableRoomBathRoomFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomBathRoomFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomBathRoomFacility' })
}

export const getAvailableRoomBedroomAndLaundryFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomBedroomAndLaundryFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomBedroomAndLaundryFacility' })
}

export const getAvailableRoomFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomFacility' })
}

export const getAvailableRoomEntertainmentFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomEntertainmentFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomEntertainmentFacility' })
}

export const getAvailableRoomFamilyFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomFamilyFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomFamilyFacility' })
}

export const getAvailableRoomHeatingAndCoolingFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomHeatingAndCoolingFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomHeatingAndCoolingFacility' })
}

export const getAvailableRoomInternetAndOfficeFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomInternetAndOfficeFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomInternetAndOfficeFacility' })
}

export const getAvailableRoomKitchenAndDiningFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomKitchenAndDiningFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomKitchenAndDiningFacility' })
}

export const getAvailableRoomSafetyFacilityApi = (): Promise<
  AxiosResponse<GetAvailableRoomSafetyFacilityResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRoomSafetyFacility' })
}

export const getAvailableRoomViewApi = (): Promise<AxiosResponse<GetAvailableRoomViewResponse>> => {
  return request.get({ url: '/mock/system/getAvailableRoomView' })
}

export const getAvailablePillowTypeApi = (): Promise<
  AxiosResponse<GetAvailablePillowTypeResponse>
> => {
  return request.get({ url: '/mock/system/getAvailablePillowType' })
}

export const getAvailablePillowFirmnessApi = (): Promise<
  AxiosResponse<GetAvailablePillowFirmnessResponse>
> => {
  return request.get({ url: '/mock/system/getAvailablePillowFirmness' })
}

export const getAvailableRatePlanStatusApi = (): Promise<
  AxiosResponse<GetAvailableRatePlanStatusResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRatePlanStatus' })
}

export const getAvailableRatePlanAllowedApi = (): Promise<
  AxiosResponse<GetAvailableRatePlanAllowedResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRatePlanAllowed' })
}

export const getAvailableRatePlanIncludedApi = (): Promise<
  AxiosResponse<GetAvailableRatePlanIncludedResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableRatePlanIncluded' })
}
