# 📄 React Mission 02 - 웹 사이트 랜딩 페이지 구현

## 결과

<img width="48%" height="500px" alt="image" src="https://github.com/ingbinsee/button-component/assets/140426866/2497c924-0bde-430a-af16-3678c7bd4862">
<img width="48%" height="500px" alt="image" src="https://github.com/ingbinsee/button-component/assets/140426866/94634227-f753-4003-8b23-62de588568f3">

## 활용

<img src="https://skillicons.dev/icons?i=react,tailwind,git,github"/>

## 주제

React 컴포넌트를 구성한 후, 컴포넌트를 조립해 웹 사이트 랜딩 페이지를 구현하여 배포합니다. <br />

### [배포 사이트 바로가기](https://createjujeob.netlify.app/)

- [RootLayout.jsx 바로가기](https://github.com/ingbinsee/create-jujeob/blob/main/src/layout/RootLayout.jsx)
- [CreateJujeob.jsx 바로가기](https://github.com/ingbinsee/create-jujeob/blob/main/src/layout/CreateJujeob.jsx)
- [Input.jsx 바로가기](https://github.com/ingbinsee/create-jujeob/blob/main/src/components/Input.jsx)
- [Button.jsx 바로가기](https://github.com/ingbinsee/create-jujeob/blob/main/src/components/Button.jsx)
- [data.js 바로가기](https://github.com/ingbinsee/create-jujeob/blob/main/src/data/data.js)

## 계획

- [x] 다양한 페이지를 참고하여 원하는 주제를 선정합니다.
- [x] 선정한 주제를 표현할 웹 페이지를 기획합니다.
- [x] 페이지 내 재사용이 가능한 컴포넌트는 아토믹 컴포넌트로 구성합니다.
- [x] 페이지 내 렌더링할 데이터를 구성합니다.
- [x] 구성한 컴포넌트 및 데이터를 Header, Main, Footer에 조립합니다.
- [x] RootLayout에 페이지 요소를 배치합니다.
- [x] React Hook을 다양하게 활용해 봅니다.
- [x] 입력, 클릭과 같은 이벤트 요소를 활용하여 원하는 기능을 구현합니다.
- [x] netlify를 활용하여 페이지를 배포합니다.

## 기능

- 입력창에 이름을 입력하고 생성 버튼을 누르면 주접 문구가 랜덤으로 나옵니다.
- 아무런 값도 입력하지 않을 시 사용자에게 alert창으로 이름을 입력해야 한다는 것을 알려줍니다.
- 생성 버튼 1회 클릭 시 버튼이 비활성화되어 입력값 수정이 불가합니다.
- 다시 주접을 생성하고 싶을 시 초기화 버튼을 누르면 입력한 값이 지워져 처음의 상태로 돌아갑니다.
- 랜덤 주접 문구를 클릭 시 문구가 복사됩니다. 문구가 성공적으로 복사되면 사용자에게 alert창으로 복사가 되었음을 알려줍니다.

## 구조

<img width="483" alt="image" src="https://github.com/ingbinsee/button-component/assets/140426866/051a50d6-ef5e-4b26-8cf4-bf39d945e546">

## 컴포넌트

### Input.jsx

```jsx
import {useId} from 'react';

function Input({disabled, type, placeholder, className, ...restProps}) {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className="sr-only"></label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        {...restProps}
      />
    </>
  );
}
export default Input;
```

### Button.jsx

```jsx
function Button({type, text, className, ...restProps}) {
  return (
    <button type={type} className={className} {...restProps}>
      {text}
    </button>
  );
}

export default Button;
```

## 본문

### 입력창

```jsx
<Input
  type="text"
  disabled={disabled}
  aria-label="이름"
  value={inputName}
  placeholder="이름을 입력해 주세요."
  className="grow border-solid border-2 border-sky-700 p-2 text-lg rounded-xl bg-sky-100 focus:border-4 read-only:bg-red-300 read-only:text-white disabled:border-red-700"
  onChange={(e) => {
    setInputName(e.target.value);
  }}
/>
```

### 버튼

```jsx
<Button
  text="생성"
  type="button"
  disabled={disabled}
  className="bg-blue-600 text-white px-3 rounded-md mx-3 h-11 text-lg focus:border-4 disabled:bg-gray-300"
  onClick={() => {
    inputName.length > 0
    ? setIsVisiable(true)
    : alert('이름을 입력해 주세요.');
    setDisabled(!disabled);
  }}
/>

<Button
  type="reset"
  text="초기화"
  className="bg-red-500 text-white px-3 rounded-md h-11 text-lg focus:border-4"
  onClick={() => {
    setInputName('');
    setIsVisiable(false);
    setDisabled(false);
  }}
/>
```

### 주접 생성

```jsx
<CreateJejeob
  name={inputName}
  className="bg-gray-300 px-20 py-16 mb-3 rounded-2xl text-center text-3xl border-solid border-2 border-gray-800"
  spanClassName="absolute bottom-0 right-0 p-3 text-xl font-semibold text-green-700 cursor-pointer"
  onClick={() => {
    hanbleCopy('.result');
  }}
/>
```

## 소감

- 페이지에 필요한 요소를 고민하고 이를 설계하는 과정 속에서 각각의 작은 요소가 아닌 전체적인 페이지를 고려한 기능 구현에 대해 생각할 수 있었던 시간이었습니다.
- 재사용이 가능한 요소를 별도로 관리하는 과정 속에서 발생할 수 있는 다양한 경우를 고려하고 최대한 덜어내는 과정을 경험할 수 있었습니다.
- useState, useId와 같이 React Hook을 다양하게 활용해볼 수 있었습니다.
- 적절한 이벤트를 활용하여 컴포넌트를 효율적으로 조작할 수 있는 방법에 대해 익힐 수 있었습니다.
- Debounce를 활용하여 inpur에 입력된 값이 실시간으로 적용되는 것이 아닌 입력 후 일정 시간에 도달했을 때 적용해보려 하였으나 구현하지 못하여 추후 이에 대한 리팩토링이 필요합니다.
