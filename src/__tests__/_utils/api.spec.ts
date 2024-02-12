import { getSearchParams } from '@/app/_utils/api';
import { NextRequest } from 'next/server';

describe('Utils | api', () => {
  describe('getSearchParams', () => {
    it('returns key/value pairs from NextRequest search params using the keys arg', () => {
      const searchParams = new URLSearchParams();
      searchParams.set('foo', 'bar');
      searchParams.set('baz', 'foo');
      searchParams.set('hello', 'world');
      searchParams.set('useless', 'param');
      const mockNextRequest = { nextUrl: { searchParams } } as NextRequest;
      const result = getSearchParams(mockNextRequest, [
        'foo',
        'baz',
        'hello',
        'missing',
      ]);
      expect(result).toEqual(
        expect.objectContaining({
          foo: 'bar',
          baz: 'foo',
          hello: 'world',
        })
      );
    });
  });
});
