import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";

export default function Play(): JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: boolean) => !previousState);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const goBack = () => {
      Alert.alert("You sure?", "Cause if youre not...", [
        { text: "cancel", onPress: () => null, style: "cancel" },
        { text: "yup", onPress: () => BackHandler.exitApp() },
      ]);

      return true;
    };

    const handler = BackHandler.addEventListener("hardwareBackPress", goBack);

    return () => handler.remove();
  });

  const showToast = () => {
    ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  // alert
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.container}>
        <Text>Play</Text>

        <TextInput />
        <ScrollView scrollsToTop>
          {Array(2)
            .fill(0)
            .map((_el, key) => (
              <Image
                key={key}
                style={{ height: 250, width: 250 }}
                source={{
                  uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEBAVFhAVEhAVFRUWEBYWEBYRFRUWFxUXFxYYHSggGBonGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGS0lHyYtLSsrLSstKy0tLSstLS0rLSstLSstLS8tLS0tKy0rLS0tLSstLS0tLSstLS0tLSstLf/AABEIAN0A5AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABNEAACAgEBBQQGBAkIBwkAAAABAgADEQQFEiExQQZRYXETIjKBkaEUQpKxByMzUmJjcoLRJENTc6KyweEWNFSDpMLSFUSEk5Sjw+Lj/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQQBAgYCAwAAAAAAAAABAgMRBBIhMUEiUQUTFDJhkYHRFUKx/9oADAMBAAIRAxEAPwDHRROYogbiXRJAkeiSRGSR0s7E4WOCJgGIYnUIgIuqHCVzS0vHCVjwEzmESKIxD1EmLIdEmrGSQsWEIDCEIogB0oncRROpFsRw8hnnJdshrzggJCiOKI2I4sYHUauEenNgiyBUPznGI9eOMajIiwhCACQEUxBACXRJIkaiShGSR0scEbWOiRYBCdQiGNWjhKPaGqSri7AeHU+QnXaLb60jcTDW93RfP+Ewup1DWMWdiSZNLHZnstxwiz1+3mbhX6q9/wBY/wAJGo2vcv18+B4yviiGWZ9z7NLoe0wH5VD5r/Ay60vaHTt/Obp7mGPnymBirjry+ceSatkvJ6dVqUb2XU+TAxx3AGWIA7ycCea/SFHsVjPex3j8OA+U41Grd/bdm8CeHw5Q4J/UP2NrqO0tCtugluOMqPVHvMuaXDAMDkEAg+Bnlqzadi9dv1mon1kPD9g/wMTJV2tywzTKIpERY3qNVWgy7qo8WAkOy/KRzeZFr5yDre0enHBWLnuVSc+/lKvT9pQbVUris8CeZBPIyaRW7Y5wakR1RG1jyRMsOpy4neIjCRAqdSvGMyXrFkSSIsIRIQA6ccYgjmoHGNwAlUSVItElCBJHaR1RGlj6yLAJne023/Qj0VZzaRxPRR/GS+022Po9fq/lGyF8O8zzmywsSzHJJySeeY0ii2zHCEdySSTkniT1zOYQjMwTqdInqlu4qPjn+E5gAQhHdOgJyfZUZPl3e88IANQj+oOQrdTvfJuEarTJx8fAdYADcAPH7p1prWU5ViCRjIOD8pxa+Tnp08uk5jzyBKbX3HgbrPtt/GRyxPE8T48TOrOOG7+fmIoG6N7qeXh4w5EIW3eA9rr4eAjUUxIDPROzmr9LQjE+sPVPmP8ALEua5iexGrw71Hkw3h5jn8vum3rikbK5ZidwMWErLCv1i8JXmW2qXhKthJoTOYRYRiH9avGMYk7aCyFEhkiiShImnkxYwR0sfWMrHlkWMy/brQlq1uH1Dg/sn/OYeeu6igOjIwyrAg+Rnl2p2e6uygZCsy5HI4OIbl5M1lcnLhZIcJIGis/MMdTZlh6AeZg5xXkjGi2XUX+iOD6mP0vuB/jOJL1mm9GqgnJJY+HSRJJPPKISg4Nxl2EmLpnKhERiWwxwCeH1R/j74zotObLFrH1mA93X5T0iusKAo5AAfCV227EadJpHe3zhI891+nasIjjD7pJHcCxx90f0uyrnrzXWTvdcgDdHmep+6Wm0tEdRrN36qqm+e4c8efGaetAoAAwAMAeAisu2Je5bp9F82csv0p4MQOzWo/NX7Yi/6MajuX7c3EMzN9TI3/4yn8mJp2HauRZUxXgRukHJHTnwz3yu1COGJtQrnhxUgDuxnuno+YjqCMEAjuIyJNat+UVT+FQ7jJnl5ESW3aPQCq31RhG9Ze4d4lTNUXlZORZW65OL8E3Y2o9HdW/cwz5HgfvnqNc8iE9Y2bZv1o3ein5RvosofLRKhOsRMSo1EfUDhKmwcZdWjhKnUrxk0RYzCEWSEWWuXhKyXWqXhKZhxiQ2PaeTVkKiTVjBHSyQojCyQkixgBMMebftv/eMtu0vaX0OaqsG3qei/wCcw/0uzJO+eJJPmecrsqckTo1kKZttZ8Gr2boH1Fq0V+0x4noqD2mPl9+JP7S7DOksChi1TjKMfayPaVscMjn5GXf4Ktnn6PZqXJ37WKK3UInDhn9LPwl1t7RtqtJbUQPpNWSuP6RRlWXPRl+8jpMTWJbTX9a3NTXXseQ7bX1VPcfvEqJJfUO4ZXOcceXUGRp0YR2xSZyNTYrbZTj5NJ2G2dZbczV1NYyJyUZPrHGZ6Pp+yWsfB9GiD9ZaN74IG/wmZ/BztqzR0Weg0dmo1FzKRug+iVAOG++OBzk4+6XtnaDtDYTuaWqpemQnD3u5z8Jnvi3Lx/Jo02olXDEfP4LPQ/g+sGWa5ELneYCsu2eXtbwHKSz2Bb/a/wDh/wD7ymTV9oufpNN5FU/wEc+l9oTw9JpF8d0cP7JlMk5PLa/ZOGonCO1ZLT/QFv8Aa/8Ahx/1xD2Cf/ax/wCn/wD0kjYOxtoPizWbUsb1gfR1VVonDmC27kjyAmxlTePJatRZ7s8+s7C6gezqKWPQGt0+YLfdIFvZbXL/AN3D/wBXch/v7pnp8Zs1danDWID3F1B++LJNamxeTwztpsa4U71lFiFDnLVnGOR9YcPnMBPrEvXarJvK6sCrAMDlSMEYHhPl/tDs06bU3ac/zdjKPFean3qQZt00srBg1kt8t45p9n+k0zWr7dbnI70IH3Te9nTnTU/1ayg7EVBqrQeRbHxXjNFsOkpUtZ+oWX3Bjg/DE0y+0hSuc/gsQIuIuIuJTk0jTiVesWW7iV2sWSixMroQIiywiXt68JS6hcGX1i8JT61eMhFjY1RJyCQaZPrkmCOwJ1qHKozDmFYjzAiCOhc8DyP3SIPo8gusLEsxySSSfGcy57QbBs07FguaSThhxAB6HulNJmDGD3vsNZUdDQKmBC1gNjmLObgjockyw1HqWpaDwb8U/wAzWfc2R+/PD+yfaOzRXCxcmokCxOjL4fpDoZ6q+le2x301o9Dqa6rlJUmvfQrvEEew+Nw+ODw4TnW1bZZZuqnujgyXaHsazbQdahiu2q24cOAYD1l8PWI+1PPmBHA8xwPnPpUjjnrPDPwgbK+j62wAYSz8YndhuY9xzNNF2/0vwZ7qtvKPV+w2jFWg0+BgvX6Q+JYk/dLyVur2brfoukTRNWqLTWLcgG/dIB/Fb3qE4z7XWO6Xs3pSv8s1200Y8TvsK0H71ClB9qZnW7JN5RoU9kUsD2v9JuE1flBggHk2CCV8MgEZ8Y7pn31VgCN4AgEYIz0I6GZLatK+mNGytpXEVMoZrLhclilC7kWFd1AvqrxySW5cOOn7E02tTXfdc9m/Wr4dKwVLDOMoozgGRsocFlsIWqbwi+v3q6WKAF1rcqDyLAEjPvj+muDorjkyqw8mAP8AjHMdDykXZmmNVNdR+oir7lGB8pUWlT2m1BZq9IpIFod7SCQwoTAKhhxUszKM9waZpuwezzz03/u2f9UsNt7SNetuPoL7Qmn04zVQXVRm123m5JzHMzjZfaKrUP6NEtDYBOavUGRkAupKgkdCZZicVlZwRzBvDM9tnsPs+mtrt+2jd4hksJO8eAADZJJPDA4zybWWMzsXZmbOCXJLnHAZyTxwJ692zdjqRW/sVojKOm84OW8+GPj3zy3tDTu3v44b4zdp09uWzNekukarsPXjTk99jfIAf4TT1CUvZijc01Y7xvH945l3VJzZbWvSh2EWGJWWHJEh6pOEnYke9Y4vkTKUiEdtTjCW5Il4wlZr0lsRIOtThK4skyqrHGT6pBUcZNpkxIdEfrjIjqnHGJjOrlUqwYDdIOc8sTx28DeOOWTjyzwlz2i2897kKxFQJAAPMd5lJJJYMdk1J8CT2D8H+0Go0i0XV2G3O9VWqFnamwZU55KM73FiMTBdhNg/S9UqsPxNeHs8VB4L7zw8sz3VRy7vliZdTNfaW6eD+4ibM1L2KzWIFYWWLuht7AVse11PCUv4Q+yx1ekN1S5vpJZR1ZPrD5Z90tdgnNIY/Xe9/c1rkfIiaXZnsnzmSE9k8o0TjujgNkNnT0n9TV/dEmCIqgDAGAOQHKLCTy8jSwsFRtLYa6g/jnYrx9VUrUYP6RUv8GEm7N0FVFa00VhK1HqqOXjz5nxkqETkx4CEZ0uqSwMa3DBXZGwc4dThlPiDHogMjq11N9uu0dVtVQdtI2Wod2KKik8Sdw53cFSDw85Ydnez30Y2s7K1ltm+Sqbqg4A5Z4nmc+PISfs/8tqD+nUv2alP/NJ8tlbJrb4K4wWcnm/4Ra8atW/O06D7Lv8A9U8z7T6YvdUqj1nAHznqf4Sq8XUN0NVq+9WU/wDNMeNBvXJaeSK2P2jym/Tv0LJC2LkuC0or3VCjkAB8JKqjKx+qEixdDoEXEUQlYxMRq1Y9OXEEwKi6vjCSbU4wlpEscSNqF4SVGrxwlSZIo7FwZJokfU2DPCTtn6Ox+SH4SxyREURxRngeoxJF+zrEGWU48pV6jXrU6iwgI/AMeQcdCfEfdGvV0DaXZ5xtrZrae1q2HDJKnoV6SCBngJu+3erpakIGVrd4FcEEgdeIkL8GmxPpGqFjjNVGHPcXz6g+IJ90cpYjlmNw9W1Ho3YXYP0PSqrD8dZh7PMjgvuHzzNCx4HyM6zEI6TlSk5PLOgkksIg7AP8lo7zTWfioM0Wyj6p85mthWj0foDwsoxW69eA9Vh3qy4IPn3GaPZR5jyMT7AZ1/aHT1WCkvv3sd0VpxfexnDEkKnMe0RzHfJ+kuZ13nqas/msyFh57hI+ci30VpZQTWvojca7F3RuldSChyOuXKZk/VbCvpOdKwtq/obXIsUfq7jneH6L/aEujU5RzEqdm2WGLIW3NU1WmutRculNrKO9lUkfOcPtZE4ahX07frk3Uz4WjNbe5jJtVqsMqwZe8EEfESva0+UWJpkbY61ilBUysoRPWUg7xCgZJHM+MmSJqtm02cXrG9+cMrYPJ1ww9xkPT6WzdD6bWFqyMqLVW5MeDAq/xYxYQx7YnH0z/nam7+wRV/8AH85YmV+y9HbW1jPYhVyG3ErZQLD7bAsx58OHfk9ZTdttqEL9ErOHsXNhB4rTyx4FjkeQaNRy8IMmW7W7aGqtG5+Rr3lrPVyfbf8AZ4ADyz1ldp41euDgdI7p50YR2xwVksR6qMiP1Ql0MfAi4gISsYRCIsIARbE4wjzCElkCF/2qCd1QSfCPaqm4pkVnHlJvYbQ1/lHAyO+bN9o0n1OHwmSy/a8JEUec9mtniy31xyM9X0ejRFAVRymMqpWu47vIma7Z+qBGCZnvm5ckkObQ0quhBE8x21sNby2nYcCeBHMHoRPWG5TOejUXb2OsenvlAJRTWGeJ7Y/BzrqN5vRh6VVnNgYBQijJyDxBxPRewOxfoukQMPxlmLH78sPVX3DHzml7T3i0V6Mfzn4y3w09ZGQf2m3V8t6IZfPUSsgk0QrqUXkSEITOXEDX6UhhqKh+NUbpX+kq5lD49VPQ+BMsNn6xWC2ocqfcfEEdCOWOhESVuqzQ5uUZpbjco5qf6VR/eHUceY4vsDUbQ0/pqXQHBZfVbuccUb3MAfdNLsLaH0iiu7GGIw69VtX1bFPkwImT2ZqhwGcqRkHpx5SbUr1sz0WbhY5dSgepmxjeK5BDYA4gjPXM00WqHDKLq3LlGuIzwMo9p7A0BBsuoqTvsA9E2e82Jgj4yNbtnVr7NdFnfmyyr4eq8K+0WoHt6If7vVK399Emv5tb8mb5c14KXbOzqKaRbodbdvvbRWgGr+kVk2WKDwtL8Au8eBHKc7G2VbRZaTcr02HfCCrcK2n22GGIw3MgAccnqZJ23teu2pydn3rqVBNLGmt2Fg9kq9TNj34yDjrH9FrUtG9WTgHBBRkYHuKsARM2oa/1NFKeOR261UVnY4VVLE9ygZM8yNzWlr7Pylp3yDzVT7Ce5cDzz3zads7caYp/Sulf7pOX/sq0x9g4SNK8lzKXUe1OqImpHEwomxdECcseqjKR6qRkSJAiwEWVgJCLCAjgiE6xCGRlR2d2gcYHKX91+QMDjmazS9m6EUKEElafZdKclEwSui3wiKTMlYp4Ng8h0knS67d6zU6x6K0L2siVqMlmIVQPMzH63UtqTjSU+jq633IQ7DvqpPHv9Z8eRii9/gfQ/ru1YqXBbGeHHqTyA7z4SLp7tRd6wX0S896weuf2axx+0R5R7Z2xKqTvgF7scbbDvWe7oo8FAEmaqoujIGKllK7w5jIxkeMl6V0Sw/JWdnqyxt1LMzm191GbGfQV5VMY4BSd5h+1LkzimsIoRRhVAUDuAGBO4N5Y0sCQhCRGEUCJFEYFRWp0jHj/ACRjkfqGJ5f1RP2T4ctVoNVveqefQ94lWwB4EZB6dMSpos+iuKm/1ZyBS2eFTn+aY9FP1T+73R9iNuI3qLd1d4IzfoqAWPlkgfOM6PVBuB9r75KgBH0uoZ871L1jpvmvj7kZvnJEIQAyvbez1tPX+lc/2VC/88z7y67a/wCsaf8AqdV8d6mU7CaqvtIvspdUvGN1c5I1g4xivnNS6Ik6uP1xiqPpIyGSRFiCLKxhCEICCEWEALzVbUssYhTgAysu2razGrTk2Wg4Y5xTWf1j9D+iMniOA5yBW9tpIOn1AoyeCha3sHezOylE8BxPXA4TSaKpURVWsVqAMIMYXw9XhKpuuEcKOWZq67Jy3SfBC02yssLdTYbrhxUsMVVn9XXyB/SOW8ZZwhMrbZsSSCEIqjPARDEhJ1GzyeLcB3dZPqoVeQjApxp2xndOI2RNBI2q0YbiODQwBTwndtRU4InEQBONTQliNXYoZGBDA8iDO4RgVWjGpoO5j01S+w++F1AHRGDcHI/OyM9Zc6XtGnK1bUPe1L7vvZQV9+Y3CPdkWCXV2n0LEhdbRkcx6dAfmY//ANt6XGfpVGP6+v8AjKnYGnDmxSBhL3B4fnYcfJ5n+0mxRXq94gfR7d62td0YGoH5QHvGPXA7y3cJo09KusUE8ZKrbHXFyLHtVtbTWmj0N9Vj+ksUhLVZghrJJwp4DKr8RKsyPrF3fxqrlkByAOLV/WHyyPKdaXW1WjNVit5Nx7+I5ibdRpZadqL5XuVUXq1ZIWtXjIq85N1o4yGJGPReTKZISRqZKSKQEhZ1OVncqYxIRYQASLDEIAaOEITATCEJK0mkL8T7MAONPpi58O+WtGmVeQ49/WOIoAwOUb1GpWsZbexnGQjMB57oOB4xiHYTim5XG8jBl71II+IncYBCEIAcW1hhgiVup0JHFeI+ctYQAy+r1QrKbw9V33N7orEHdz4EjHmRH5a7Q2bXcjI44MMEjgfAjxHPMqdDRYS1T4NtZAY8t5T7FgHcw+BBHSLAxZzrGNab+4WZnRK1zjesc4UE9F6k9ADLfT6ADi3E/KM7cGErb8zUaY+42BD8njS5EzvY+gNKEOwa13NljAYXfIAwo6KAqgZ48OM47QbK+k0tWDu2Ah6n/NtX2SfDoR1BMsoSUZOMlJdicU1hnmmnu3h6y7rgsroeaupwy+4/eO+Q6tn1Z9G9andyayR6wQnkG5jB4eRE0fbnZBUjX1D2d306jmUHA2eOFyD4AH6sotpq25v1cbE9dR+cBzX3jI+E9hpdRDU1bmuV2jz99MqZ4X8HNmywRhbLF4cPX38fbBlauQSre2pw3ce4jwI4y60GsS6tbazlWGR3+IPiDwkfW6NC6WuWVVOLCuM+iOeODz3ThvLeler0kHXvrXXPHku02qnGe2b4I9BkxI5tPYtum9ZvWpPK1R6mOm9+b58vGNVmcLKa4OwiSs7nCxzErYCYnQEIRAEIRIZA0UJ0qE8hmS9PoCTluA+cxFhzotJvcT7P3y1UY4CCjHAcosYghCEAIt+z62O/gq/56MUs95X2vI5EZ3NTX7LpcvdYPR2/bQFW+yPOWEIZAq224if6wllH6ViZq/8ANQsg95EsqrVYBkYMp5EEFT5ETqVV3Z+gsXrDU2HiXoc1EnvZV9V/3gY+ALWEpjptdX+TvqvUclvT0dh/3tQ3f7E6TbZThqdNbVj6wX01J8Q9WSB+0qw2iyW8rdr6R8rqKPy9eRuk4W2o+1WT0PVT0I7iZI0O0qbhmm6uzHPccMQfEDiJKh0MY0WrW1BYmcHIIIwysODKw6MDwIjO2qi9Fqr7W4xXv3l9YfMCNavTPW51FA3mOPS1ZA9Ko5MueAsA5HqOB6EWFVgZQwzggHiCG494PEHwgAlNgZVccmVWHkRmcJqQbGrAyVUFj0BPJfPHHyx3yPtTUuihaU3rXO6nA+jXhxdyOSgcfHgBzj2g0gqQICSeJZj7TueLMfEn+EQD7qCCpGQQQR0IPAieb0Vej3qSeNTvX44U+qT+7umekzDdoq9zWOOllddnmwzW3yVPjOv8Gs23uHuv+GD4jDNe72Mxol+jah68/ibm30HRXbmB4Eg+/HfLyVu2qQU3zyQ+sRzCHG8R5cG81Ek6C8uuG9tTuv3bw6jwIII856WPpe040ueTSdjNfwbRueNY3qs/W07HG747hyvlu98kbV7MI2W04CPz3eVTe76h8Rw8Jl3tatk1FYzZU28AOboeFie9fmBPRNLqFtRba2yjqrKR1UjInlviOnenuzHp8r+juaO75lfPaPPBkMa3UrYuN5G9oZ5HxB6EcDHhNjtfZFeoUBwQ653LF4WIT3HqO9TkHumR12kt07BbwCpOFtUYrY9AR9RvA8+hMyxsUjUziEISwQkIsIhHoKqByGIsITGWBCEIAEIQgAQhCABCEIAEIQgBA2hsXT3neuoRmHJ93Fg8nGGHuMiDY91Q/kursGOVd5N9XlvH8YPPePkZdQjyxYRT7O25vWfRtTX6DVYJClt6q0Dm1NmBvjvBAYdRLiRdpbPq1CGu5Ay5BHEhlYcmVhxVh0I4yjq2nbp9XTobH9MlocpYw3bkCjOHI4Wd2cKe/MeE+g67NNIes2nVWdxmJfGdxEayzHeUQEgeJjuqpZ8BbCg+sVA3yO4E+z54z5RdLpUrGK1ABOT1Zm72Y8WPiZEZXjbqnlptUf8Awrr/AH8Sh7VuXOm1Bqev8ZbQRYFDbrpvg+qTw3qwPfNpiUHbhf5IzdUt07DzFqD7iZq0c9l8GvdFOojuqkvwZhlBGDyPA+Uo6LfRMGPJGFFv7POiw+5gCfHwl7KrV0qdQEIyl9FiuP2CN0/B2HwnsrPDPOx9i1lt2M125Y+jb2TvXU92CfxtfuY7w8H8JmdhXs9I3jllayvPVvRsVBPicR7aNpqVdQn5Sh1sXxxwZT4MpZffMmvoV+nfuuUaNNY6rV+menxu+lXUo6hkYYKkZUjuIjgOQD3iE8cegMLtzZzaQ7/FtIT7Z4tTnkLD1T9Pp175HBnoLqCCCAQQQQRkEHoRMNtjZiaWxEqJ9FbvlUPKsrgkKfzTngvTpw4C+E88Mi0R4QhLSJ//2Q==",
                }}
              />
            ))}
        </ScrollView>

        <Text>Flat list</Text>
        <Button
          color="#1b1a1b"
          onPress={() => {
            alert("Just got clicked on!");
          }}
          title="Press me"
          accessibilityLabel="Click on me for alert"
        />

        <Pressable
          onPress={() => {
            alert("Just got clicked on!");
          }}
          accessibilityLabel="Click on me for alert"
          style={{
            backgroundColor: "#1b1a1b",
          }}
        >
          <Text style={{ color: "#AAA" }}>Press me with styles</Text>
        </Pressable>

        <TextInput
          value={query}
          onChange={(e) => setQuery(e.nativeEvent.text)}
          style={{ borderColor: "red", borderWidth: 2 }}
        />
        <FlatList
          data={Array(10).fill(10)}
          initialScrollIndex={5}
          getItemLayout={(data, index) => ({
            length: 250,
            offset: 250 * index,
            index,
          })}
          ListEmptyComponent={<Text>Nothing to see here</Text>}
          // inverted
          // numColumns={4}
          // horizontal={false}
          renderItem={({ item, index, separators }) => (
            <View>
              <Button
                onPress={separators.highlight}
                title={`highlight ${index}`}
              />
              <Button
                onPress={separators.unhighlight}
                title={`unhighlight ${index}`}
              />
              <Image
                style={{ height: 250, width: 250 }}
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              />
            </View>
          )}
          // keyExtractor={item => item.id}
          // to initiate rerender from state changes
          extraData={query}
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Button title="Toggle Toast" onPress={() => showToast()} />
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />

      {/* alert */}
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
  },
  safearea: {
    flex: 1,
  },
});
