import ResponseValidator from './ResponseValidator';

describe('response validator tests', () => {
  it('should validate 200 response', () => {
    expect(() =>
      ResponseValidator({ status: 200, statusText: '', ok: true }, [200, 201])
    ).not.toThrow();
  });
  it('should throw error on unsupported response code', () => {
    const errorText = 'hi';
    expect(() =>
      ResponseValidator({ status: 200, statusText: errorText, ok: true }, [300])
    ).toThrow();
  });
  it('should throw error on unsupported response code', () => {
    const errorText = 'hi';
    expect(() =>
      ResponseValidator({ status: 200, ok: false, statusText: errorText }, [
        200,
      ])
    ).toThrow();
  });
});
