# 프로젝트 개요

## 프로젝트 주제
편의점 종합 솔루션 v2.0 (Convenience Store Management Solution)

## 기술 아키텍처
- **프로그래밍 언어**: TypeScript
- **데이터베이스**: PostgreSQL (Supabase Managed)
- **Front_end**: React 19 + TypeScript, Tailwind CSS, Vite, React Router v7
- **Back_end**: Supabase (Auth, Database, Realtime), Express (프록시 서버)

## 주요 기능
- **고객 주문 시스템**: 실시간 지점 선택, 장바구니, 결제, 주문 추적
- **점주 관리 시스템**: 실시간 주문 관리, 재고 관리, 매출 분석, 물류 요청
- **본사 관리 시스템**: 지점 관리, 상품 마스터 관리, 물류 승인, 통합 분석
- **결제 시스템**: 토스페이먼츠 연동, 포인트/쿠폰 결제
- **실시간 기능**: Supabase Realtime 기반 실시간 데이터 동기화
- **데이터 분석**: 매출 통계, 상품 분석, 사용자 행동 패턴 분석

## 역할과 기여
- **전체 시스템 아키텍처 설계**: 프론트엔드(React)부터 백엔드(Supabase)까지 전체 웹 애플리케이션 아키텍처 설계 및 구현, 클라이언트-서버 통신 구조 설계, 상태 관리 및 데이터 흐름 최적화
- **데이터베이스 설계 및 최적화**: 36개 테이블로 구성된 PostgreSQL 관계형 데이터베이스 스키마 설계, ERD 작성 및 정규화, 인덱스 최적화를 통한 쿼리 성능 개선, PostGIS를 활용한 공간 데이터 처리
- **백엔드 로직 구현**: PostgreSQL 함수 및 트리거 30개 이상 구현으로 비즈니스 로직 데이터베이스 레벨 처리, Row Level Security (RLS) 정책 설계로 역할 기반 접근 제어 구현, 원자적 트랜잭션 처리로 데이터 일관성 보장
- **RESTful API 설계 및 개발**: Supabase 클라이언트 기반 RESTful API 설계 및 구현, 관계형 쿼리 최적화 및 페이지네이션 처리, Express.js 프록시 서버 구축으로 외부 API 통합 및 CORS 문제 해결
- **프론트엔드 개발 및 상태 관리**: React 19 + TypeScript로 컴포넌트 기반 UI 개발, Zustand + TanStack Query를 활용한 효율적인 상태 관리 아키텍처 구축, React Router를 통한 라우팅 및 권한 기반 접근 제어 구현
- **실시간 기능 구현**: Supabase Realtime WebSocket을 활용한 실시간 데이터 동기화 구현, 주문 알림 및 재고 업데이트 실시간 처리, 실시간 대시보드 구현으로 사용자 경험 향상
- **외부 서비스 통합**: 토스페이먼츠 결제 API 연동 및 결제 프로세스 구현, 네이버 Geocoding API 및 Google Maps API 통합, 외부 API 에러 핸들링 및 재시도 로직 구현
- **보안 및 인증 시스템**: JWT 토큰 기반 인증 시스템 구현, 역할 기반 접근 제어(RBAC) 설계, Row Level Security로 데이터베이스 레벨 보안 강화, 환경 변수 관리 및 민감 정보 보호
- **배포 및 DevOps**: GitHub Pages, Render.com, Vercel 등 다중 플랫폼 배포 자동화 설정, CI/CD 파이프라인 구성, 빌드 최적화 및 번들 크기 최적화, 프로덕션 환경 모니터링 및 성능 튜닝
