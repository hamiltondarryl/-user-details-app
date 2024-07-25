import useFetchUser from "../hooks/useFetchUser";

const UserDetails = ({userId}) => {

    const { user, loading , error , refetch } = useFetchUser(userId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>

            <h1>Nom de l'utilisateur : { user.username} </h1>
            <h1>Nom : { user.name} </h1>
            <h1>Email : { user.email}</h1>

            <button onClick={refetch}>Refresh</button>

        </div>
    );

}


export default UserDetails;