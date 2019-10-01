import withData from 'components/withData';
import PostList from 'components/PostList';

export default withData(
  PostList,
  {
    content_type: 'posts',
    sort: 'created:DESC',
    limit: 5,
    static: true
  },
  {
    skipRedirect: true
  }
);
