
import { createApi } from 'unsplash-js';

// 只需要 ACCESS_KEY
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; // ✅ 正确获取密钥

const unsplash = createApi({
  accessKey: ACCESS_KEY // ✅ 只使用 ACCESS_KEY
});

export default unsplash;