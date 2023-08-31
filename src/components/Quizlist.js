const QuizList = [
    {
        id: 1,
        question: "HTML의 의미를 보기에서 고르세요!",
        answer: "Hyper Text Markup Language",
        view: {
            number1: "Hyperlinks and Text Markup Language",
            number2: "Home Tool Markup Language",
            number3: "Hyperlinks Tool Markup Language",
            number4: "Hyper Text Markup Language"
        },
        hint: "하이퍼텍스트 마크업 언어입니다.",
        type: "html"
    },
    {
        id: 2,
        question: "<button> 과 <input> 요소에 대한 설명으로 올바른 것을 고르세요.",
        answer: "<button> 요소는 컨텐츠를 중앙으로 정렬하는 기본 스타일을 가진다.",
        view: {
            number1: "<button> 요소의 기본 타입은 button 이다.",
            number2: "<input> 요소는 인라인 요소임으로 자식으로 인라인 요소만 감싸줄수 있다.",
            number3: "<button> 요소는 컨텐츠를 중앙으로 정렬하는 기본 스타일을 가진다.",
            number4: "<button>의 submit 타입의 성능이 <input>의 submit 보다 우수하다."
        },
        hint: "center",
        type: "html"
    },
    {
        id: 3,
        question: "다음 속성에 대한 설명 중 틀린 것을 고르세요.",
        answer: "alt 속성은 요소에 대한 설명으로 마우스를 호버하면 툴팁을 표시합니다.",
        view: {
            number1: "src 속성은 필요한 소스의 경로를 나타냅니다.",
            number2: "alt 속성은 요소에 대한 설명으로 마우스를 호버하면 툴팁을 표시합니다.",
            number3: "href 속성은 하이퍼링크가 가리키는 URL을 나타냅니다.",
            number4: "lang 속성은 요소 내에 사용된 언어를 정의합니다."
        },
        hint: "hover",
        type: "html"
    },
    {
        id: 4,
        question: "다음 중 css 선택자 우선순위(가중치)가 올바른 것을 고르세요.",
        answer: "!important > ID 선택자 > class 선택자 > 가상 요소 선택자",
        view: {
            number1: "Inline 스타일 > !important > 가상클래스 선택자 > class 선택자",
            number2: "가상 요소 선택자 > class 선택자 > 가상클래스 선택자 > 요소선택자",
            number3: "!important > ID 선택자 > class 선택자 > 가상 요소 선택자",
            number4: "ID 선택자 > 가상클래스 선택자 > 요소 선택자 > 가상 요소 선택자"
        },
        hint: "!",
        type: "css"
    },
    {
        id: 5,
        question: "배경색을 바꾸고자 할 때 사용하는 css 속성",
        answer: "background-color",
        view: {
            number1: "bgcolor",
            number2: "color",
            number3: "fon-color",
            number4: "background-color"
        },
        hint: "full",
        type: "css" 
    },
    {
        id: 6,
        question: "다음 중 float 을 해제하는 방법으로 적절한 것을 고르세요.",
        answer: "Float 된 요소의 부모요소에 overflow:hidden 속성을 부여한다.",
        view: {
            number1: "Float 된 요소의 부모요소에 overflow:hidden 속성을 부여한다.",
            number2: "Float 된 요소에 display:inline-block 속성을 부여한다.",
            number3: "Float 된 요소의 부모요소에 clear:both 속성을 부여한다.",
            number4: "Float 된 요소의 다음 형제요소에 overflow:hidden 속성을 부여한다."
        },
        hint: "hidden",
        type: "css" 
    },
    {
        id: 7,
        question: "다음 Array 메서드 중 return 값이 undefined인 것은?",
        answer: "forEach",
        view: {
            number1: "find",
            number2: "filter",
            number3: "map",
            number4: "forEach"
        },
        hint: "for",
        type: "js"
    },
    {
        id: 8,
        question: "Javascript가 아닌 것은?",
        answer: "mysql",
        view: {
            number1: "type script",
            number2: "mysql",
            number3: "react",
            number4: "vue"
        },
        hint: "type",
        type: "js"
    },
    {
        id: 9,
        question: "반복문이 아닌것은?",
        answer: "filter",
        view: {
            number1: "for",
            number2: "filter",
            number3: "map",
            number4: "forEach"
        },
        hint: "ft",
        type: "js"
    }
]

export default QuizList;