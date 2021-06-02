import DDragonAPI from "../../../src/api/DDragonAPI";
import ProfileIcon from "../../../src/dto/ddragon/class/profileicon";
import ProfileIcons from "../../../src/dto/ddragon/class/profileicons";

describe("DDragonAPI", () => {
    describe("ProfileIcons", () => {
        let api = null;
        let profileIcons = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            profileIcons = await api.profileIcons.all();
        });

        test("get all profile icons", async () => {
            expect(profileIcons).toBeInstanceOf(ProfileIcons);
            expect(Object.keys(profileIcons.metadata)).toEqual([
                "type",
                "version",
            ]);
        });

        test("get profile icon by ID", async () => {
            const profileIconIDNum = 0;
            const profileIcon = profileIcons.getByID(profileIconIDNum);
            expect(profileIcon).toBeInstanceOf(ProfileIcon);
            expect(profileIcon.data.id).toBe(profileIconIDNum);

            const profileIconIDStr = "0";
            const profileIcon2 = profileIcons.getByID(profileIconIDStr);
            expect(profileIcon2).toBeInstanceOf(ProfileIcon);
            expect(profileIcon2.data.id).toBe(parseInt(profileIconIDStr, 10));
        });

        test("get profile icon with bad ID", async () => {
            const profileIconID = "thisisabadid";
            const profileIcon = profileIcons.getByID(profileIconID);
            expect(profileIcon).toBeNull();
        });
    });
});
