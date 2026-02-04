export interface SqlEditorProps{
    onRun: (sql: string) => void;
    className?: string
    id_query: string
}