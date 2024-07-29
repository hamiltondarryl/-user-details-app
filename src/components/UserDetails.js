import useFetchUser from "../hooks/useFetchUser";

const UserDetails = ({userId}) => {

    const { user, loading , error , refetch } = useFetchUser(userId);

    if (loading) return <h3 className="text-whitre">Chaegement...</h3>;
    if (error) return <h3 className="text-whitre">Error: {error.message}</h3>;

    return (
        <div>
            <div class="card-container">
                <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3> { user.username}</h3>
                <h6>{ user.name}</h6>
                <p> <a target="_blank" href="mailto:{ user.email}">{ user.email}</a></p>
                <p> <a target="_blank" href="phone:{ user.phone}" >{ user.phone}</a></p>
                <div class="buttons pb-2">
                    <button class="primary"  onClick={refetch}>
                        Rafraichir
                    </button>
                </div>
            </div>
            <footer>
                <p>
                    Created with <i class="fa fa-heart"></i> by
                    <a target="_blank"  className="ml-1" href="https://www.linkedin.com/in/hamilton-darryl-mahanga-boulingui-9368a3145/">Hamilton Darryl</a>
                </p>
            </footer>

        </div>

    );

}


export default UserDetails;