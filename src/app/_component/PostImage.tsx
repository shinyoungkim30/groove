import styles from './Post.module.css'

type Props = {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostImage({ post }: Props) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;
  if (post.Images.length) {
    return (
      <div className={styles.postImage}>
        <img src={post.Images[0]?.link} alt="" />
      </div>
    );
  }
}
