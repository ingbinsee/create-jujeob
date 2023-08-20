import {useState} from 'react';
import Header from './Header';
import Input from '@/components/Input';
import Button from '@/components/Button';
import CreateJejeob from './CreateJujeob';
import Footer from './Footer';
import {hanbleCopy} from '@/utils/copy';

const information = 'https://mk28.tistory.com/206';

function RootLayout() {
  const [inputName, setInputName] = useState('');
  const [isVisiable, setIsVisiable] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Header />
      <main>
        <div className="flex justify-start my-10">
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
        </div>
        {isVisiable ? (
          <CreateJejeob
            name={inputName}
            className="bg-gray-300 px-20 py-16 mb-3 rounded-2xl text-center text-3xl border-solid border-2 border-gray-800"
            spanClassName="absolute bottom-0 right-0 p-3 text-xl font-semibold text-green-700 cursor-pointer"
            onClick={() => {
              hanbleCopy('.result');
            }}
          />
        ) : (
          <img
            src="/itsme.jpg"
            alt="최고심 자존감 이미지"
            className="w-1/2 m-auto"
          />
        )}
      </main>
      <Footer
        information={information}
        className="p-2 block text-gray-500 text-right"
      ></Footer>
    </>
  );
}

export default RootLayout;
