const FALLBACK_WARNING = '同步方法复制失败';
const FALLBACK_ERROR = '同步方法复制到剪贴板时发生错误:';

// 异步剪贴板 API 方法
const useAsyncClipboardAPI = async (value: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch (error) {
    console.error('异步剪贴板 API 复制失败:', error);
    if (error instanceof DOMException && error.message.includes('Document is not')) {
      console.warn('异步剪贴板 API 失败，尝试使用同步方法');
    } else {
      return false;
    }
  }
  return false;
};

// 同步方法
const useFallbackMethod = (value: string): boolean => {
  try {
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', value);
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 9999);
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    if (!result) {
      console.warn(FALLBACK_WARNING);
      return false;
    }
    return true;
  } catch (error) {
    console.error(FALLBACK_ERROR, error);
    return false;
  }
};

/**
 * 复制内容到剪切板
 * @param value
 * @return Promise<boolean>
 */
const copyToClipboard = async (value: string): Promise<boolean> => {
  // 先尝试使用异步剪贴板 API，如果失败则使用同步方法
  if (navigator.clipboard) {
    const asyncResult = await useAsyncClipboardAPI(value);
    if (asyncResult) {
      return true;
    }
  }

  return useFallbackMethod(value);
};

export default copyToClipboard;
