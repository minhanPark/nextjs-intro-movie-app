# Next.js latest intro

Next.js로 만들어본 간단한 영화앱

```js
// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
```

next.config.js에는 redirects와 rewrites를 설정할 수 있는데, redirects는 특정 패턴이나 url을 잡아서 리다이렉트 시켜주는 역할을 한다.

> 만약 오래된 홈페이지에서 새 홈페이지로 올렸을 때 \*를 통해서 다 새 홈페이지로 보내줄 수 있음.

rewrites는 api 키를 숨기는 등의 **_마스킹_**을 할 수 있음. 즉 원래는 네트워크 등에서 api_key가 나타났어야 하지만 rewrites를 통해서 api_key가 숨겨짐.
