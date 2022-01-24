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

```js
<Link
  href={{
    pathname: `/movies/${movie.id}`,
    query: {
      title: movie.original_title,
    },
  }}
  as={`/movies/${movie.id}`}
>
  <a>{movie.original_title}</a>
</Link>
```

Link에도 as 속성을 통해 마스킹을 할 수 있다. 쿼리를 통해서 길어지더라고 as로 숨길 수 있음.

> rewrites와 as의 차이는 rewrites는 새로 쓸 수 있다(다시 작성할 수 있다)는 점의 차이.  
> ex) 특정 url에 요청이 왔을 때(source) api_key라는 파라미터를 붙여서 타켓 url로 보냄  
> as 는 브라우저 단에서 숨기는 역할  
> ex) query를 보낼 때 길어져서 별로니 그냥 없는것처럼 보냄

```bash
[...params].js
```

파일이름에 저렇게 ... 을 붙여주면 모든 파라미터를 다 받음.  
그래서 쿼리를 확인하면 배열형태로 오는 것을 확인할 수 있음.
