import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  const itemList = data?.items || [];

  return (
    <div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {itemList.map((item) => {
              return (
                <div>
                  <div>
                    <img src={item.ImageUrl} />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                  <div>{item.type}</div>
                  <div>{item.dateOfPurchase}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
