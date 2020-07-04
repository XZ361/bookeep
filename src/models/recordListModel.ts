import clone from '@/lib/clone';
const localStorageKeyName = 'recordList';

const recordListModel = {
    data:[] as RecordItem[],
    create(record: RecordItem){
      const record2: RecordItem = clone(record);
      record2.createdAt=new Date();
      this.data.push(record2);
    },
    fetch() {
        // 从本地缓存中读取数据
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName,
             JSON.stringify(this.data));
    }
}

export default recordListModel;