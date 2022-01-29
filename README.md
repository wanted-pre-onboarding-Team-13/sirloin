<h1 align= "center"> 설로인 관리자 상품등록 페이지 구현 과제</h1>

### :house: 배포 URL
http://team13-pre-onboarding-sirloin.s3-website.ap-northeast-2.amazonaws.com/

![캡처](https://user-images.githubusercontent.com/65812122/151647077-90850869-809d-4be5-9041-4dc3f4d63a8f.PNG)
### :exclamation: 설치방법
~~~
1. npm install
2. npm start
~~~

### :clapper: 구현내용

#### 1. 노출 및 판매기간 설정
~~~
- default로 제한 없음 선택
- 달력 날짜,시간 선택 기능
~~~

#### 2. 상품 기본 정보
~~~
- 카테고리 체크시 선택한 카테고리 우측에 표시
- 카테코리 체크 해제와 우측 카테고리 x 버튼 클릭시 삭제 기능
- 필터 태그 검색 기능
- 필터 태그 포커스시 아래에 등록되어 있는 모든 필터태그 보이도록 구현
- 지정된 필터 태그 기능
- 지정된 필터 태그 삭제 기능
- 상품 썸네일과 대표 이미지 첨부 및 삭제 기능
~~~

#### 3. 상품 옵션
~~~
- 이미지 첨부 시에 이미지 미리보기 기능 구현
- 옵션 세트 추가시에 옵션 세트 카드 추가기능과 삭제기능
- 옵션 추가 시에 상품 옵션 추가기능과 삭제기능
- 상품 정상가/판매가 input 숫자만 입력가능, 세자리comma
- 정상가 미입력하고 판매가 입력시 alert창 후 정상가로 focus
- 정상가대비 판매가 할인율 %로 표기, 소수점버림, 0%일경우 없음처리
~~~

#### 4. 상품 소개 이미지, 구매자 추천 이미지
~~~
- 이미지 추가 Btn클릭시 이미지 파일명과 X(delete)버튼 생성
- 추가 첨부 시, 최신 업로드 순으로 파일명 업로드
- 첨부한 이미지파일 localstorage에 저장
- X(delete) 버튼 클릭시 첨부파일 localstorage에서 삭제 + UI에서 삭제
~~~

#### 5. 상품 정보 고시
~~~
- 정보고시 추가시에 정보고시 생성 순서 번호 표시, 삭제 클릭시 정보고시 삭제
- 항목 추가버튼 클릭시 옵션항목이 추가되며, 옵션항목 삭제
~~~


#### 6. 상품 배송 설정
~~~
- 사용자 배송일 지정과 방문수령 On 일 때, 선주문 예약 배송 Off 기능  구현
- 선주문 예약 배송 On 일때 , 사용자 배송일 지정, 방문수령 Off 기능 구현
- 마일리지 적립 default On
- 감사카드 제공 default Off
~~~
