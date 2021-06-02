import DDragonAPI from "../../../src/api/DDragonAPI";
import ProfileIcons from "../../../src/dto/ddragon/class/profileicons";

describe("DDragonAPI", () => {
    describe("ProfileIcons", () => {
        test("get all profile icons", async () => {
            const api = new DDragonAPI();
            const profileIcons = await api.profileIcons.all();
            expect(profileIcons).toBeInstanceOf(ProfileIcons);
            expect(Object.keys(profileIcons.metadata)).toEqual([
                "type",
                "version",
            ]);
        });

        test("get profile icon by ID", async () => {
            const api = new DDragonAPI();
            const profileIcons = await api.profileIcons.all();
            const profileIconID = "0";
            const profileIcon = profileIcons.getByID(profileIconID);
            expect(profileIcon.image.full).toBe("0.png");
        });
    });
});
