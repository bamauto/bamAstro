# 신규 지역 사이트 생성

새로운 지역 사이트를 생성합니다. 아래 가이드를 따라 순차적으로 진행하세요.

---

## 📋 사전 준비 정보

먼저 사용자에게 다음 정보를 질문하세요:

| 항목 | 설명 | 예시 |
|------|------|------|
| 지역명 (한글) | 사이트에 표시될 지역명 | 강남 |
| 지역명 (영문) | 폴더명, URL 등에 사용 | gangnam |
| 도메인 | 사이트 도메인 | high-karaoke.com |
| 메인 키워드 | SEO 메인 타겟 키워드 | 강남 유흥 |
| 서브 키워드 | SEO 보조 키워드 | 강남 가라오케, 강남 하이퍼블릭 |

---

## Phase 1: 템플릿 복사 및 초기 설정

```bash
# suwon 앱을 새 지역명으로 복사
cp -r apps/suwon apps/[지역영문명]

# node_modules 및 lock 파일 제거
rm -rf apps/[지역영문명]/node_modules apps/[지역영문명]/pnpm-lock.yaml
```

---

## Phase 2: 기본 설정 파일 수정

### 2.1 package.json 수정
- 파일: `apps/[지역영문명]/package.json`
- `"name": "@bamastro/suwon"` → `"name": "@bamastro/[지역영문명]"`

### 2.2 astro.config.mjs 수정
- 파일: `apps/[지역영문명]/astro.config.mjs`
- `site: 'https://public-karaoke.com'` → `site: 'https://[새도메인]'`
- sitemap 내부 도메인 참조도 변경

---

## Phase 3: 핵심 지역 설정 (region.ts)

**파일 위치:** `apps/[지역영문명]/src/config/region.ts`

### 3.1 기본 정보 (필수)
- `id`: `'[지역영문명]'`
- `name`: `'[지역한글명]'`
- `nameEn`: `'[지역영문명대문자]'`
- `domain`: `'[도메인]'`

### 3.2 연락처 정보
- `phone`, `phoneFormatted`, `kakaoId`, `kakaoLink`, `telegramId`, `telegramLink`, `email`

### 3.3 위치 정보
- `address`: street, city, cityEn, region, regionEn
- `geo`: lat, lng

### 3.4 SEO 설정
- `landmarks`: 지역 랜드마크 배열
- `nearbyStations`: 인근 역 배열
- `seo.mainKeyword`, `seo.mainKeywords`, `seo.description`
- `seo.longTailKeywords` (10-15개)
- `seo.locationKeywords` (5-10개)

### 3.5 venueTypes slug 변경
각 업소 타입의 `slug`를 새 지역명으로 변경:
- `suwon-highpublic-guide` → `[지역]-highpublic-guide`
- `suwon-karaoke-guide` → `[지역]-karaoke-guide`
- `suwon-shirtsroom-guide` → `[지역]-shirtsroom-guide`
- 등등...

### 3.6 areaGuides 업데이트
지역 세부 가이드 slug 변경

---

## Phase 4: localContent 추가 (구글 중복 방지 - 매우 중요!)

**파일 위치:** `apps/[지역영문명]/src/config/region.ts`

```typescript
localContent: {
  areaCharacter: '[지역 특성 설명 100-150자]',
  targetCustomers: '[주요 고객층]',
  transportFeature: '[교통 특징]',
  nearbyBusiness: ['기업1', '기업2', ...],
  uniqueAdvantages: ['장점1', '장점2', '장점3'],
  recommendedTime: '[추천 시간대]',
  pricingNote: '[가격대 비교]',
  venueDescriptions: {
    highpublic: '[지역] 하이퍼블릭 특징...',
    karaoke: '[지역] 가라오케 특징...',
    shirtsroom: '[지역] 셔츠룸 특징...',
    roomsalon: '[지역] 룸살롱 특징...',
    kimonoroom: '[지역] 기모노룸 특징...',
    hostbar: '[지역] 호빠 특징...',
  },
}
```

---

## Phase 5: 페이지 파일명 변경

**파일 위치:** `apps/[지역영문명]/src/pages/`

```bash
mv suwon-station-guide.astro [지역]-station-guide.astro
mv suwon-[세부지역]-guide.astro [지역]-[세부지역]-guide.astro
```

각 페이지 내부 콘텐츠 수정:
- 제목, 설명, 본문 텍스트
- FAQ 내용
- 링크 URL

---

## Phase 6: SEO 파일 수정

### 6.1 robots.txt
- `apps/[지역영문명]/public/robots.txt`
- Sitemap URL 변경: `https://[새도메인]/sitemap-index.xml`

### 6.2 manifest.json
- `apps/[지역영문명]/public/manifest.json`
- `name`: `"[지역명] 유흥 가이드"`
- `short_name`: `"[지역명]"`

---

## Phase 7: 의존성 설치 및 빌드 테스트

```bash
# 루트에서 의존성 설치
pnpm install

# 빌드 테스트
pnpm --filter @bamastro/[지역영문명] build

# 개발 서버 실행
pnpm --filter @bamastro/[지역영문명] dev
```

**체크리스트:**
- [ ] 홈페이지 로딩 확인
- [ ] 각 가이드 페이지 접근 확인
- [ ] 연락처 정보 표시 확인
- [ ] SEO 메타 태그 확인
- [ ] 모바일 반응형 확인

---

## Phase 8: Vercel 배포 설정

### 8.1 vercel.json 필수 설정

```json
{
  "framework": null,
  "installCommand": "cd ../.. && pnpm install --frozen-lockfile",
  "buildCommand": "cd ../.. && pnpm --filter @bamastro/[지역영문명] build",
  "outputDirectory": "dist"
}
```

### 8.2 Vercel 프로젝트 설정
- Root Directory: `apps/[지역영문명]`
- Framework Preset: 비활성화 (`"framework": null`)

### 8.3 환경변수 설정 (필수!)

```bash
cd apps/[지역영문명]
echo "https://rrzeapykmyrsiqmkwjcf.supabase.co" | vercel env add SUPABASE_URL production
echo "[SUPABASE_ANON_KEY]" | vercel env add SUPABASE_KEY production
```

### 8.4 도메인 연결
- Vercel → Settings → Domains
- DNS: A 레코드 `76.76.21.21`, CNAME `cname.vercel-dns.com`

---

## Phase 9: SSR 동적 라우트 prerender 설정 (중요!)

> SSR 모드에서 동적 라우트 페이지 404 에러 방지

모든 `[region]-*.astro` 파일의 frontmatter 첫 줄에 추가:

```astro
---
export const prerender = true;
---
```

**대상 파일:**
- 가이드 메인 페이지 (6개)
- FAQ 페이지 (6개)
- 비교 페이지 (3개)
- 기타 가이드 페이지 (2개)

---

## Phase 10: 이미지 교체 (권장)

### 10.1 이미지 폴더 구조
```
apps/[지역]/public/images/
├── venues/           # 제휴 업소 안내 섹션
│   ├── karaoke_main.webp, karaoke_1-6.webp
│   ├── highpublic_main.webp, highpublic_1-6.webp
│   └── ...
└── partners/         # 파트너 갤러리 섹션
    └── partner_1-10.webp
```

### 10.2 수원 기준 복사 (동기화)
```bash
for region in bundang gangnam ingedong; do
  rm -rf apps/$region/public/images/venues
  rm -rf apps/$region/public/images/partners
  cp -r apps/suwon/public/images/venues apps/$region/public/images/
  cp -r apps/suwon/public/images/partners apps/$region/public/images/
done
```

---

## Phase 11: 블로그 포스트 생성 (기존 지역 복사 방식)

> ⚠️ 블로그 포스트는 직접 생성하지 않고, 기존 지역(분당 등)에서 복사 후 지역명 치환 + 셔플 방식으로 생성합니다.

### 11.1 Supabase MCP로 SQL 실행

**mcp__supabase__execute_sql** 도구를 사용하여 아래 SQL 실행:

```sql
-- 1. 기존 지역(bundang)에서 복사하여 새 지역 포스트 생성
-- [신규지역영문], [신규지역한글], [기존지역영문], [기존지역한글] 치환 필요

INSERT INTO bamastro_blog_posts (
  title, slug, excerpt, content, category,
  read_time, featured, gradient, status, region, published_at
)
SELECT
  -- 제목: 기존 지역명 → 신규 지역명 치환
  REPLACE(REPLACE(title, '[기존지역한글]', '[신규지역한글]'), '[기존지역영문]', '[신규지역영문]'),
  -- 슬러그: 지역명 치환 + 랜덤 suffix로 중복 방지
  REPLACE(slug, '[기존지역영문]', '[신규지역영문]') || '-' || SUBSTRING(gen_random_uuid()::text, 1, 6),
  -- 요약: 지역명 치환
  REPLACE(REPLACE(excerpt, '[기존지역한글]', '[신규지역한글]'), '[기존지역영문]', '[신규지역영문]'),
  -- 본문: 지역명 치환
  REPLACE(REPLACE(content, '[기존지역한글]', '[신규지역한글]'), '[기존지역영문]', '[신규지역영문]'),
  category,
  read_time,
  featured,
  gradient,
  'published',
  '[신규지역영문]',  -- 새 지역 region 값
  -- 발행일: 랜덤 오프셋으로 셔플 효과 (1~60일 전 랜덤)
  NOW() - (FLOOR(RANDOM() * 60) + 1) * INTERVAL '1 day'
FROM bamastro_blog_posts
WHERE region = '[기존지역영문]'
  AND status = 'published';
```

### 11.2 예시: 분당 → 동탄 복사

```sql
INSERT INTO bamastro_blog_posts (
  title, slug, excerpt, content, category,
  read_time, featured, gradient, status, region, published_at
)
SELECT
  REPLACE(REPLACE(title, '분당', '동탄'), 'bundang', 'dongtan'),
  REPLACE(slug, 'bundang', 'dongtan') || '-' || SUBSTRING(gen_random_uuid()::text, 1, 6),
  REPLACE(REPLACE(excerpt, '분당', '동탄'), 'bundang', 'dongtan'),
  REPLACE(REPLACE(content, '분당', '동탄'), 'bundang', 'dongtan'),
  category, read_time, featured, gradient,
  'published', 'dongtan',
  NOW() - (FLOOR(RANDOM() * 60) + 1) * INTERVAL '1 day'
FROM bamastro_blog_posts
WHERE region = 'bundang' AND status = 'published';
```

### 11.3 복사 후 확인

```sql
-- 신규 지역 포스트 수 확인
SELECT COUNT(*) FROM bamastro_blog_posts WHERE region = '[신규지역영문]';

-- 카테고리별 분포 확인
SELECT category, COUNT(*)
FROM bamastro_blog_posts
WHERE region = '[신규지역영문]'
GROUP BY category;
```

---

## Phase 12: 검색 엔진 등록

### 12.1 Google Search Console
1. [Google Search Console](https://search.google.com/search-console) 접속
2. 속성 추가 → URL 프리픽스
3. 소유권 확인 (HTML 태그)
4. `region.ts`에 `seo.googleVerification` 추가
5. Sitemaps 제출: `https://[도메인]/sitemap-index.xml`

### 12.2 Naver Search Advisor
1. [Naver Search Advisor](https://searchadvisor.naver.com/) 접속
2. 사이트 등록 및 소유 확인
3. `region.ts`에 `seo.naverVerification` 추가
4. 사이트맵 제출

---

## 🎉 완료 체크리스트

- [ ] 사이트 정상 접속
- [ ] 모든 페이지 로딩 확인
- [ ] 모바일 반응형 정상 작동
- [ ] 연락처 정보 정확성 확인
- [ ] SEO 메타 태그 정상 출력
- [ ] 블로그 페이지 정상 표시
- [ ] Google Search Console 등록 완료
- [ ] Naver Search Advisor 등록 완료

---

## 📚 상세 참고 문서

- [NEW_REGION_CREATION_LOG.md](/Users/deneb/bamAstro/NEW_REGION_CREATION_LOG.md) - 전체 가이드 및 상세 설명
- [NEW_REGION_CREATION_TASKS.md](/Users/deneb/bamAstro/NEW_REGION_CREATION_TASKS.md) - 단계별 체크리스트

---

**작성일:** 2026-01-25
**버전:** 2.0 (Phase 1-12 통합)
