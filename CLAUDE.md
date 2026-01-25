# bamAstro 프로젝트 가이드

## 도메인 목록

| 지역 | 앱 이름 | 도메인 |
|------|---------|--------|
| 강남 | gangnam | high-karaoke.com |
| 분당 | bundang | hikaraoke.com |
| 동탄 | dongtan | best-karaoke.com |
| 인계동 | ingedong | public-karaoke.net |
| 수원 | suwon | public-karaoke.com |

## 새 지역 추가 시 필수 작업

새로운 지역 사이트를 추가할 때 반드시 아래 작업을 수행하세요:

1. **이 문서 갱신**: 위 도메인 목록에 새 지역 정보 추가
2. **region.ts 설정**: `apps/{지역}/src/config/region.ts` 파일에 도메인 설정
3. **이미지 파일 추가**:
   - `apps/{지역}/public/images/{지역}-highpublic-karaoke-private-room.webp`
   - `apps/{지역}/public/images/venues/*_main.webp` (6개)
4. **.env 파일 생성**: Supabase 연결 정보 설정
5. **Vercel 배포 설정**: vercel.json 및 도메인 연결

## 프로젝트 구조

```
bamAstro/
├── apps/
│   ├── gangnam/      # 강남 사이트
│   ├── bundang/      # 분당 사이트
│   ├── dongtan/      # 동탄 사이트
│   ├── ingedong/     # 인계동 사이트
│   ├── suwon/        # 수원 사이트
│   └── template/     # 새 지역 템플릿
├── packages/
│   └── ui/           # 공통 UI 컴포넌트
└── CLAUDE.md         # 이 파일
```

## 공통 UI 컴포넌트 (packages/ui)

- `IntroSection`: region prop 필수 (지역별 이미지 표시)
- `VenuePreviewSection`: region prop 필수 (제휴 업소 6개 표시)
- `HeroSection`, `FeaturesSection`, `GallerySection` 등

## 참고 사항

- 모든 앱은 Supabase 동일 DB 사용 (bamastro_blog_posts 테이블)
- SSR 모드로 운영 (블로그 포스트 동적 로딩)
- pnpm workspace 모노레포 구조
