import {useContext, useEffect} from 'react';
import GithubContext from '../../context/github/GithubContext';
import {Link, useParams} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa';
import RepoList from '../repos/RepoList';
import {
  getUserAndRepos,
} from '../../context/github/GithubActions';

function User() {

  const { user, loading,  repos, dispatch} = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {

    dispatch({
      type:'SET_LOADING'
    })
    const getUserData = async() =>{

      const userData = await getUserAndRepos(params.login)

      //modify state based on action
      dispatch({
        type:"GET_USER_AND_REPOS",
        payload: userData
      })


    }
    getUserData()
  }, [dispatch,params.login]);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner/>;
  }
  return (
      <>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
            <i className='fas fa-check text-success' />
        ) : (
            <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
                src={avatar_url}
                className='round-img'
                alt=''
                style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
                <>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                    <>
                      <strong>Username: </strong> {login}
                    </>
                )}
              </li>

              <li>
                {company && (
                    <>
                      <strong>Company: </strong> {company}
                    </>
                )}
              </li>

              <li>
                {blog && (
                    <>
                      <strong>Website: </strong> {blog}
                    </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
          <RepoList repos={repos}/>
        </div>
      </>
  );
}

export default User;
