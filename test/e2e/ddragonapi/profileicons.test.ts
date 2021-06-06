import {
    checkIfProfileIconIsValid,
    checkIfProfileIconsIsValid,
    isURL,
} from "../../utils";
import DDragonAPI from "../../../src/api/DDragonAPI";
import ProfileIcon from "../../../src/dto/ddragon/profileIcon/profileIcon";
import ProfileIcons from "../../../src/dto/ddragon/profileIcon/profileIcons";

describe("DDragonAPI", () => {
    describe("ProfileIcons", () => {
        let api: DDragonAPI = null;
        let profileIcons: ProfileIcons = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            profileIcons = await api.profileIcons.all();
        });

        test("get all profile icons", async () => {
            expect(profileIcons).toBeInstanceOf(ProfileIcons);
            checkIfProfileIconsIsValid(profileIcons.data);
        });

        test("getAll", async () => {
            const icons = await profileIcons.getAll();
            expect(icons).toBeInstanceOf(Array);
            const firstIcon = icons[0];
            expect(firstIcon).toBeInstanceOf(ProfileIcon);
            checkIfProfileIconIsValid(firstIcon.data);
        });

        test("get profile icon by ID", async () => {
            const profileIconIDNum = 0;
            const profileIcon = profileIcons.getByID(profileIconIDNum);
            expect(profileIcon).toBeInstanceOf(ProfileIcon);
            checkIfProfileIconIsValid(profileIcon.data);
            expect(profileIcon.data.id).toBe(profileIconIDNum);

            const profileIconIDStr = "0";
            const profileIcon2 = profileIcons.getByID(profileIconIDStr);
            expect(profileIcon2).toBeInstanceOf(ProfileIcon);
            checkIfProfileIconIsValid(profileIcon2.data);
            expect(profileIcon2.data.id).toBe(parseInt(profileIconIDStr, 10));
        });

        test("get profile icon with bad ID", async () => {
            const profileIconID = "thisisabadid";
            const profileIcon = profileIcons.getByID(profileIconID);
            expect(profileIcon).toBeNull();
        });

        test("get profile icon url", async () => {
            const profileIconID = "0";
            const profileIcon = profileIcons.getByID(profileIconID);
            expect(isURL(profileIcon.url)).toBeTruthy();
        });
    });
});
