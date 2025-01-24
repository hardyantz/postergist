export default function truncateContent(strText, strLength) {
    const words = strText.split(' ');
    if (words.length > strLength) {
        return words.slice(0, strLength).join(' ') + '...';
    }
    return strText;
}