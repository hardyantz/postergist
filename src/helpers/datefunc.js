export default function formatPublishDate (dateString) { // sample dateString = "2025-01-17T18:09:00+07:00";
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', options).replace(',', '');
    return formattedDate
}