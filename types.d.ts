export interface IPost {
  caption: string;
  video: IVideo;
  _id: string;
  postedBy: IPostedBy;
  likes: IPostedBy[];
  comments: IComment[];
  userId: string;
}

export interface IVideo {
  asset: {
    _id: string;
    url: string;
  };
}

export interface IPostedBy {
  _id: string;
  userName: string;
  image: string;
}

export interface ILike {
  postedBy: IPostedBy;
}

export interface IComment {
  comment: string;
  _key: string;
  postedBy: {
    _ref: string;
  };
}

export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}
