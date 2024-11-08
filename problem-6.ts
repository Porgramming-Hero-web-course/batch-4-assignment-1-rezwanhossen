{
  const updateProfile = (
    profile: Profile,
    updateProfi: Partial<Profile>
  ): Profile => {
    return { ...profile, ...updateProfi };
  };

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  // console.log(updateProfile(myProfile, { age: 26 }));
}
