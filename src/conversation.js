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
    },
    3: {
        text: '자주 묻는 질문입니다.<br/><br/>원하시는 문의 내용을 선택해주세요!',
        options: [
            {
                text: '🗞️ 뉴스레터 구독하기',
                next: 2
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
    },
    4: {
        text: '기타 문의입니다.<br/><br/>원하시는 문의 내용을 선택해주세요!',
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
                text: '🏡 처음으로',
                next: 1
            }
        ]
    }
};
