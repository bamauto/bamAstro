# 신규 지역 사이트 생성

새로운 지역 사이트를 생성합니다. 아래 가이드를 따라 진행하세요.

---

먼저 사용자에게 다음 정보를 질문하세요:

1. **지역명 (한글)**: 사이트에 표시될 지역명 (예: 강남)
2. **지역명 (영문)**: 폴더명, URL 등에 사용 (예: gangnam)
3. **도메인**: 사이트 도메인 (예: high-karaoke.com)
4. **메인 키워드**: SEO 메인 타겟 키워드 (예: 강남 유흥)
5. **서브 키워드**: SEO 보조 키워드 (예: 강남 가라오케, 강남 하이퍼블릭)

정보를 받은 후, `/Users/deneb/bamAstro/NEW_REGION_CREATION_LOG.md` 문서를 참조하여 다음 Phase를 순서대로 진행하세요:

## Phase 1: 템플릿 복사
- `apps/suwon`을 새 지역명으로 복사
- node_modules 및 lock 파일 제거

## Phase 2: 기본 설정 파일 수정
- package.json 수정
- astro.config.mjs 수정
- vercel.json 확인

## Phase 3: 핵심 지역 설정 (region.ts)
- 모든 지역 정보 설정 (가장 중요)

## Phase 4: 콘텐츠 수정
- 메타데이터 및 SEO 관련 파일 수정
- 이미지 경로 확인

## Phase 5: 환경 변수 설정
- .env 파일 생성 (SUPABASE_URL, SUPABASE_KEY)

## Phase 6: 빌드 테스트
- pnpm install
- pnpm build

## Phase 7: Vercel 배포
- Vercel 프로젝트 생성
- 환경 변수 설정
- 도메인 연결

## Phase 8: 검색 엔진 등록
- Google Search Console 등록
- Naver Search Advisor 등록
- sitemap 제출

각 Phase 완료 후 사용자에게 진행 상황을 보고하고, 다음 Phase로 진행할지 확인하세요.

상세한 내용은 `/Users/deneb/bamAstro/NEW_REGION_CREATION_LOG.md` 파일을 참조하세요.
