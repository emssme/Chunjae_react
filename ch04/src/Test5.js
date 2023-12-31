import React, {useState, useRef, useCallback} from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
const Test5 = () => {
    const [todos, setTodos] = useState([
        {id : 1, text:'리액트의 기초 알아보기', checked:true},
        {id : 2, text:'컴포넌트 스타일링해보기', checked:true},
        {id : 3, text:'일청 관리 앱 만들어 보기', checked:true},
    ]);
  const nextId = useRef(4);   //이후 추가되는 요소에 대한 id 값을 ref 변수에 담기
  const onInsert = useCallback(
    text => {
      const todo = {id: nextId.current, text, checked: false, };
      setTodos(todos.concat(todo));
      nextId.current += 1;  //nextId 1씩 더하기
    }, [todos],
  );

  const onRemove = useCallback(
    id => { setTodos(todos.filter(todo => todo.id !== id)); }, [todos],
  );
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id? {...todo, checked: !todo.checked} : todo,),
        );}, [todos],
  );
  return (
    <>
        <TodoTemplate>
          <TodoInsert onInsert = {onInsert} />
          <TodoList todos = {todos} onRemove={onRemove} onToggle = {onToggle}/>
        </TodoTemplate>

    </>
  )
}

export default Test5