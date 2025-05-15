import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  const addMemo = useCallback((text: string) => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
  }, [memos]);

  const deleteMemo = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }, [memos]);

  return {memos, addMemo, deleteMemo};

};