import {data} from '@/data/data';

function CreateJejeob({className, name, spanClassName, ...restProps}) {
  return (
    <div className={`${className} relative`} {...restProps}>
      <output className="result">
        {data[Math.floor(Math.random() * data.length)].replace(
          /''/g,
          `'${name}'`
        )}
      </output>
      <span className={spanClassName}>복사하기</span>
    </div>
  );
}
export default CreateJejeob;
