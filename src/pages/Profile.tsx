import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { PuffLoader } from "react-spinners";
import { useAppSelector } from "~/app/hooks";
import { Button } from "~/components/Button";
import Container from "~/components/Container";
import InputField from "~/components/InputField";
import Spacer from "~/components/Spacer";
import Typography from "~/components/Typography";
import { useUpdateUserMutation } from "~/feautres/users/user";
import TeamStyle from "~/styles/Team";

const Profile = () => {
    const [edit, setEdit] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState<string | undefined>("");
    const user = useAppSelector((state) => state?.auth.user);
    const [updateUser, { data, isLoading, error: resErr, isSuccess, isError }] = useUpdateUserMutation();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (image || firstName || lastName) {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            if (image) {
                formData.append("image", image);
            }

            updateUser({ data: formData, email: user?.email });
            setEdit(false);
            setImage(null);
            setFirstName("");
            setLastName("");
        }
    };

    const handleEdit = () => {
        if (edit) {
            fileInputRef.current?.click();
        } else {
            setEdit(true);
        }
    };

    return (
        <Container padding="10px">
            <Typography align="center" variant="title2">
                Profile
            </Typography>
            {/* <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button type="submit">Upload</button>
            </form> */}

            <Container displayFlex width="100%">
                <Container displayFlex flexCol justifyContentCenter width="50%">
                    <TeamStyle.Avater style={{ margin: "auto" }} height="300" width="300" src={user?.imageURL} />
                    <Spacer height="20px" />
                    <Container width="fit-content">
                        <input style={{ display: "none" }} name="right" type="file" ref={fileInputRef} onChange={handleImageChange} />
                        <Button onClick={handleEdit}>{edit ? "Upload Image" : "Edit Profile"}</Button>
                    </Container>
                </Container>

                <Container width="50%" displayFlex flexCol justifyContentCenter>
                    <form onSubmit={handleSubmit}>
                        {!edit ? (
                            <Container displayFlex>
                                <Typography variant="title3">{user?.firstName + " " + user?.lastName}</Typography>
                            </Container>
                        ) : (
                            <Container displayFlex>
                                <InputField
                                    error={error}
                                    required
                                    width="150px"
                                    height="30px"
                                    pr="10px"
                                    pl="10px"
                                    default={user?.firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    // icon={ICON_NAME.IconPerson}
                                    label="First Name"
                                    type="text"
                                />
                                &nbsp;&nbsp;&nbsp;
                                <InputField
                                    error={error}
                                    required
                                    width="150px"
                                    height="30px"
                                    pr="10px"
                                    pl="10px"
                                    default={user?.lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    // icon={ICON_NAME.IconPerson}
                                    label="Last Name"
                                    type="text"
                                />
                            </Container>
                        )}
                        <Spacer height="20px" />
                        {edit && (
                            <Container width="fit-content">
                                <Button size="small" variant="contained">
                                    {isLoading ? <PuffLoader size={25} color="" /> : "submit"}
                                </Button>
                            </Container>
                        )}
                    </form>
                </Container>
            </Container>
        </Container>
    );
};

export default Profile;
