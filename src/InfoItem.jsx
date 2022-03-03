import NewsJS from './NewsJS.json';
function InfoItem({data}) {
    return (
        <div className="news-info">
			<h1>{data.name}</h1>
        </div>
    );
}

export default InfoItem