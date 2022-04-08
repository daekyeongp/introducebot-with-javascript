# Introducebot

IntroduceBot는 선택 기반의 챗봇입니다.<br />사용된 언어는 Vanilla JS 입니다.

자세한 [Source code](https://github.com/daekyeongp/introducebot-with-javascript)는 [`/src`](/src) 폴더를 확인하세요.

## Conversation

옵션 객체에는 다음이 있어야 합니다
- 사용자가 선택한 레이블인 "text" 속성과 둘 중 하나의 속성
 - 숫자 키를 명시하여 다음 채팅 항목을 정의하는 "next" 속성, 사용자가 이동할 링크를 정의하는 "url" 속성

간단한 채팅 예제는 다음과 같습니다.

```js
const chat = {
    1: {
        text: '안녕하세요.<br/>저는 <b>박대경</b> 입니다!!<br/>무엇을 도와드릴까요?<br/><br/>원하시는 문항을 선택해주세요.😁',
        options: [
            {
                text: '🗞️ 뉴스레터 구독하기',
                next: 2
            },
            {
                text:'🤔 자주 묻는 질문 확인 하기',
                next: 3
            },
            {
                text: '⁉️ 기타 질문 문의 하기',
                next: 4
            },
            {
                text: '📢 Github 방문 하기',
                url: "https://github.com/daekyeongp/introducebot-with-javascript"
            }
        ]
    },
    2: {
        text: '뉴스레터 구독하기입니다.<br/><br/>원하시는 문의 내용을 선택해주세요!',
        options: [
            {
                text: '🤔 자주 묻는 질문 확인 하기',
                next: 3
            },
            {
                text: '⁉️ 기타 질문 문의 하기',
                next: 4
            },
            {
                text: '🏡 처음으로',
                next: 1
            }
        ]
    }
```