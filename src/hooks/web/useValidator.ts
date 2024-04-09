import { useI18n } from '@/hooks/web/useI18n'
import { FormItemRule } from 'element-plus'

const { t } = useI18n()

interface LengthRange {
  min: number
  max: number
  message?: string
}

export const useValidator = () => {
  const required = (message?: string): FormItemRule => {
    return {
      required: true,
      message: message || t('common.required')
    }
  }

  const lengthRange = (options: LengthRange): FormItemRule => {
    const { min, max, message } = options

    return {
      min,
      max,
      message: message || t('common.lengthRange', { min, max })
    }
  }

  const notSpace = (message?: string): FormItemRule => {
    return {
      validator: (_, val, callback) => {
        if (val?.indexOf(' ') !== -1) {
          callback(new Error(message || t('common.notSpace')))
        } else {
          callback()
        }
      }
    }
  }

  const notSpecialCharacters = (message?: string): FormItemRule => {
    return {
      validator: (_, val, callback) => {
        if (/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(val)) {
          callback(new Error(message || t('common.notSpecialCharacters')))
        } else {
          callback()
        }
      }
    }
  }

  const phone = (message?: string): FormItemRule => {
    return {
      validator: (_, val, callback) => {
        if (!val) return callback()
        if (!/^1[3456789]\d{9}$/.test(val)) {
          callback(new Error(message || '請輸入正確的手機號碼'))
        } else {
          callback()
        }
      }
    }
  }

  const email = (message?: string): FormItemRule => {
    return {
      validator: (_, val, callback) => {
        if (!val) return callback()
        if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(val)) {
          callback(new Error(message || '請輸入正確的電子信箱'))
        } else {
          callback()
        }
      }
    }
  }

  const maxlength = (max: number): FormItemRule => {
    return {
      max,
      message: '長度不能超過' + max + '個字符'
    }
  }

  const check = (message?: string): FormItemRule => {
    return {
      validator: (_, val, callback) => {
        if (!val) {
          callback(new Error(message || t('common.required')))
        } else {
          callback()
        }
      }
    }
  }

  // 必須為數字
  const number = (message?: string): FormItemRule => {
    return {
      validator: (_, val, callback) => {
        if (!val) return callback()
        if (!/^\d+$/.test(val)) {
          callback(new Error(message || '請輸入數字'))
        } else {
          callback()
        }
      }
    }
  }

  // 必須為大於零的數字
  const positiveNumber = (message?: string): FormItemRule => {
    return {
      validator: (_, val, callback) => {
        console.log(val)
        if (!val) return callback()
        if (!/^\d+$/.test(val) || Number(val) <= 0) {
          const msg = t('common.positiveNumber')
          callback(new Error(message || msg))
        } else {
          callback()
        }
      }
    }
  }

  return {
    required,
    lengthRange,
    notSpace,
    notSpecialCharacters,
    phone,
    email,
    maxlength,
    check,
    number,
    positiveNumber
  }
}
