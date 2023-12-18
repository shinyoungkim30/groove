import style from './Post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
// import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';
import PostImage from './PostImage';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
};
export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() },
      { imageId: 4, link: faker.image.urlLoremFlickr() }
    );
  }

  return (
    <PostArticle post={target}>
      <div>
        <div className={style.postTitle}>
          <div className={style.postCategory}>카테고리</div>
          <div>유튜브 커버팀을 모집합니다</div>
          &nbsp; · &nbsp;
          <span className={style.postDate}>
            {dayjs(target.createdAt).fromNow(true)}
          </span>
        </div>
        <div className={style.postUserNick}>
          <div>{target.User.id}</div>
          <div className={style.postLike}>
            <div>좋아요 45</div>
            <div>댓글 10</div>
          </div>
        </div>
      </div>
      <div>
        <PostImage post={target} />
      </div>
    </PostArticle>
  );
}
