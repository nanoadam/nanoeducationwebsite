import React from "react";
import { fire } from "../../App";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: null,
      sidebar: {
        title: null,
        content: null
      }
    };
  }
  componentDidMount() {
    fire
      .firestore()
      .collection("posts")
      .get()
      .then(snapshot => {
        const posts = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          posts.push(data);
        });
        this.setState({
          posts: posts
        });
      });

    fire
      .firestore()
      .collection("layout")
      .doc("sidebar")
      .get()
      .then(doc => {
        this.setState({
          sidebar: {
            title: doc.data().title,
            content: doc.data().content
          }
        });
      });
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h1 class="my-4">My Blog Posts</h1>

              {this.state.posts &&
                this.state.posts.map(doc => {
                  return (
                    <div className="card mb-4">
                      <div className="card-body">
                        <h2 className="card-title">{doc.title}</h2>
                        <p className="card-text">{doc.peak}</p>
                        <Link
                          to={"posts/" + doc.path}
                          className="btn btn-primary"
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                      <div className="card-footer bg-primary text-white">
                        Posted on {doc.date}
                      </div>
                    </div>
                  );
                })}

              <div class="card mb-4">
                <img
                  class="card-img-top"
                  src="http://placehold.it/750x300"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h2 class="card-title">Post Title</h2>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More &rarr;
                  </a>
                </div>
                <div class="card-footer bg-primary text-white">
                  Posted on January 1, 2017
                </div>
              </div>

              {/* Pagination */}
              <ul class="pagination justify-content-center mb-4">
                <li class="page-item">
                  <a class="page-link" href="#">
                    &larr; Older
                  </a>
                </li>
                <li class="page-item disabled">
                  <a class="page-link" href="#">
                    Newer &rarr;
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4">
              <div class="card my-4">
                <h5 class="card-header bg-primary text-white">Search</h5>
                <div class="card-body">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search for..."
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div class="card my-4">
                <h5 class="card-header bg-primary text-white">Categories</h5>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card my-4">
                <h5 class="card-header bg-primary text-white">
                  {this.state.sidebar.title}
                </h5>
                <div class="card-body">{this.state.sidebar.content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
