export interface SqlOptionsType{
    id: string
    name?: string
    sql?: string
    isOpen: boolean;
    onClose: () => void;
    onSelectSql: (id: string, sql: string) => void
}