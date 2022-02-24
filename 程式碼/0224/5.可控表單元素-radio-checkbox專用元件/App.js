import { useState } from 'react'
import CheckBox from './components/CheckBox'
import RadioButton from './components/RadioButton'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  // radio - 狀態要記錄的是使用者選中哪個選項的值
  const [gender, setGender] = useState('')

  // radio - 專用元件
  const [gender2, setGender2] = useState('')
  // radio - 選項
  const genderOptions = ['男', '女', '不提供']

  // checkbox - 單一核取方塊
  const [agree, setAgree] = useState(false)

  // checkbox group
  const [likeList, setLikeList] = useState([])

  // checkbox group(專用元件)
  const [likeList2, setLikeList2] = useState([])
  const fruitOptions = ['西瓜', '芒果', '芭樂', '香蕉']

  return (
    <>
      <section id="input-text">
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字區域</h2>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="select">
        <h2>下拉選單</h2>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          <option value="雞腿">雞腿</option>
          <option value="魯肉">魯肉</option>
          <option value="排骨">排骨</option>
        </select>
      </section>
      <section id="input-radio">
        <h2>選項按鈕</h2>
        <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>男</label>
        <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>女</label>
        <input
          type="radio"
          value="不提供"
          checked={gender === '不提供'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>不提供</label>
      </section>
      <section id="radio-button">
        <h2>選項按鈕(專用元件)</h2>
        {genderOptions.map((v, i) => {
          return (
            <RadioButton
              key={i}
              value={v}
              checkedValue={gender2}
              setCheckedValue={setGender2}
            />
          )
        })}
      </section>
      <section id="checkbox-single">
        <h2>單一核取方塊</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我同意網站註冊規定</label>
      </section>
      <section id="checkbox-group">
        <h2>多個核取方塊</h2>
        <input
          type="checkbox"
          value="西瓜"
          checked={likeList.includes('西瓜')}
          onChange={(e) => {
            //toggle(切換)
            // 如果目前這個值在陣列中 -> 移出陣列
            if (likeList.includes(e.target.value)) {
              // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
              // 2. 在拷貝出的新陣列(物件)上運算或處理
              const newLikeList = likeList.filter((v, i) => {
                return v !== e.target.value
              })
              // 3. 設定回原本的狀態
              setLikeList(newLikeList)
            } else {
              // 反之如果目前這個值"沒在"陣列中 -> 加入陣列
              // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
              // 2. 在拷貝出的新陣列(物件)上運算或處理
              const newLikeList = [...likeList, e.target.value]

              // 3. 設定回原本的狀態
              setLikeList(newLikeList)
            }
          }}
        />
        <label>西瓜</label>
        <input
          type="checkbox"
          value="芒果"
          checked={likeList.includes('芒果')}
          onChange={(e) => {
            //toggle(切換)
            // 如果目前這個值在陣列中 -> 移出陣列
            if (likeList.includes(e.target.value)) {
              // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
              // 2. 在拷貝出的新陣列(物件)上運算或處理
              const newLikeList = likeList.filter((v, i) => {
                return v !== e.target.value
              })
              // 3. 設定回原本的狀態
              setLikeList(newLikeList)
            } else {
              // 反之如果目前這個值"沒在"陣列中 -> 加入陣列

              // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
              // 2. 在拷貝出的新陣列(物件)上運算或處理
              const newLikeList = [...likeList, e.target.value]

              // 3. 設定回原本的狀態
              setLikeList(newLikeList)
            }
          }}
        />
        <label>芒果</label>
      </section>
      <section id="checkbox-group2">
        <h2>多個核取方塊(專用元件)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <CheckBox
              key={i}
              value={v}
              checkedValueList={likeList2}
              setCheckedValueList={setLikeList2}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
