import Map from './map';
import './styles/dash.css';
const Dash = () => {
    return(
        <div className="dash">
            <div className="dash-container">
                <div className="dash-header">
                    <h1 className="dash-title">Story Map</h1>
                </div>
                <div>
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Dash;