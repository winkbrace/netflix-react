import './Carousel.css';
import React from "react";
import VideoCard from "./VideoCard";
import Handle from "./Handle";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            page: 0,
            maxPage: 0,
            showPrevHandle: false,
            showNextHandle: false,
        };
    }

    fetchVideos() {
        fetch("http://localhost/api/videos/search/" + this.props.category)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    videos: json,
                    maxPage: (json.length / 4) - 1,
                    showNextHandle: json.length > 4,
                });
            })
    };

    scrollLeft = () => {
        this.setState({
            page: Math.max(this.state.page - 1, 0)
        });
    }

    scrollRight = () => {
        this.setState({
            page: Math.min(this.state.page + 1, this.state.maxPage)
        });
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    componentDidMount() {
        this.fetchVideos();
    }

    render() {
        return (
            <div className="carousel">
                <h2>{this.ucFirst(this.props.category)}</h2>
                <div className="row">
                    <Handle type="prev" onHandleClick={this.scrollLeft} shouldShow={this.state.page > 0} />
                    { this.state.videos.map((video, i) => (
                        <div className="carousel-item" style={i === 0 ? {marginLeft: (this.state.page * -100) + "%"} : {}} key={`${this.props.category}-item-${i}`}>
                            <VideoCard key={video.id} video={video} />
                        </div>
                    )) }
                    <Handle type="next" onHandleClick={this.scrollRight} shouldShow={this.state.page < this.state.maxPage} />
                </div>
            </div>
        );
    }
}

export default Carousel;