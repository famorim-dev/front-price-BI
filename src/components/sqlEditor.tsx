import { useState } from 'react';
import Editor from '@monaco-editor/react';
import draculaTheme from 'monaco-themes/themes/dracula.json';
import type { SqlEditorProps } from '../types/sqlEditor.type';
import { MdPlayArrow } from "react-icons/md";

export function SqlEditor({onRun, className}: SqlEditorProps) {
  const [sql, setSql] = useState('SELECT * FROM ;');

  const handleEditorWillMount = (monaco: any) => {
    monaco.editor.defineTheme('dracula', draculaTheme);
  };

  return (
    <section className=' flex flex-col relative w-full m-24 p-3 border-2 border-gray-200 rounded-xl bg-[#282a36]'>
      <section className='flex justify-end m-2 border-b-2 border-gray-200 rounded-b-md'>
        <button onClick={() => onRun(sql)}><MdPlayArrow size={24} className='border border-gray-400 rounded-sm text-gray-100 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 m-3'/></button>
      </section>
      <Editor
        className= {`${className}`}
        beforeMount={handleEditorWillMount}
        theme="dracula"
        width="100%"
        height="100%"
        defaultLanguage="sql"
        defaultValue={sql}
        onChange={(value) => setSql(value || '')}
        
      />
    </section>
  );
}
