import { InvalidParamError } from './../../presentation/errors/invalid-param-error'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('any_field', 'any_field_compare')
}

describe('Required Field Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ any_field: 'any_name', any_field_compare: 'any_name2' })
    expect(error).toEqual(new InvalidParamError('any_field_compare'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ any_field: 'any_name', any_field_compare: 'any_name' })
    expect(error).toBeFalsy()
  })
})
