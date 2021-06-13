function getRoadmap(data, roadmap) {
    const json = data;
    const mainSkills = [];
    const juniorSkills = [];
    const middleSkills = [];
    const seniorSkills = [];
    let mainArray = [];
    let juniorArray = [];
    let middleArray = [];
    let seniorArray = [];
    let vacancies = json.vacancies;

    for (let i = 0; i < vacancies.length; i++) {
        if (vacancies[i].name.toLowerCase().includes(roadmap.toLowerCase())) {
            let vacancy = vacancies[i];
            console.log(vacancy.name);

            if (vacancy.skills != null) {
                for (let j = 0; j < vacancy.skills.length; j++) {
                    let skill = vacancy.skills[j];
                    console.log(skill);
                    mainSkills.push(skill.skill);
                }
            }

            console.log("----------------");
        }
    }

    for (let i = 0; i < vacancies.length; i++) {
        if (vacancies[i].name.toLowerCase().includes(roadmap.toLowerCase()) &&
            vacancies[i].name.toLowerCase().includes("junior")) {
            let vacancy = vacancies[i];
            console.log(vacancy.name);

            if (vacancy.skills != null) {
                for (let j = 0; j < vacancy.skills.length; j++) {
                    let skill = vacancy.skills[j];
                    console.log(skill);
                    juniorSkills.push(skill.skill);
                }
            }

            console.log("----------------");
        }
    }

    for (let i = 0; i < vacancies.length; i++) {
        if (vacancies[i].name.toLowerCase().includes(roadmap.toLowerCase()) &&
            vacancies[i].name.toLowerCase().includes("middle")) {
            let vacancy = vacancies[i];
            console.log(vacancy.name);

            if (vacancy.skills != null) {
                for (let j = 0; j < vacancy.skills.length; j++) {
                    let skill = vacancy.skills[j];
                    console.log(skill);
                    middleSkills.push(skill.skill);
                }
            }

            console.log("----------------");
        }
    }

    for (let i = 0; i < vacancies.length; i++) {
        if (vacancies[i].name.toLowerCase().includes(roadmap.toLowerCase()) &&
            vacancies[i].name.toLowerCase().includes("senior")) {
            let vacancy = vacancies[i];
            console.log(vacancy.name);

            if (vacancy.skills != null) {
                for (let j = 0; j < vacancy.skills.length; j++) {
                    let skill = vacancy.skills[j];
                    console.log(skill);
                    seniorSkills.push(skill.skill);
                }
            }

            console.log("----------------");
        }
    }

    mainArray = makeSkills(mainSkills);
    juniorArray = makeSkills(juniorSkills);
    middleArray = makeSkills(middleSkills);
    seniorArray = makeSkills(seniorSkills);

    return [mainArray, juniorArray, middleArray, seniorArray];
}

function makeSkills(mainSkills) {
    let mainArray = [];
    let count_result = count(mainSkills);
    const uniqueSkills = mainSkills.filter(onlyUnique);
    console.log(uniqueSkills);

    for (let i = 0; i < uniqueSkills.length; i++) {
        let elem_of_array = [uniqueSkills[i], count_result[i]];
        mainArray.push(elem_of_array);
    }

    mainArray.sort((a, b) => b[1] - a[1]);
    console.log(mainArray);

    return mainArray;
}

function count(skills) {
    skills.sort();
    let current = null;
    let count = 0;
    let counts = [];

    for (let i = 0; i < skills.length; i++) {
        if (skills[i] !== current) {
            if (count > 0) {
                console.log(current + ' comes --> ' + count + ' times');
                counts.push(count);
            }

            current = skills[i];
            count = 1;
        } else {
            count++;
        }
    }

    if (count > 0) {
        console.log(current + ' --> ' + count + ' times');
        counts.push(count);
    }

    return counts;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function getUrls(data, text) {
    let languages = data.languages;
    const mainUrls = [];

    for (let i = 0; i < languages.length; i++) {
        if (languages[i].name.toLowerCase().includes(text.toLowerCase())) {
            let language = languages[i];
            console.log(language.name);

            if (language.urls != null) {
                for (let j = 0; j < language.urls.length; j++) {
                    let additionalUrl = []
                    let url = language.urls[j];
                    additionalUrl.push(url.url, url.explanation);
                    console.log(url);
                    mainUrls.push(additionalUrl);
                }
            }

            console.log("----------------");
        }
    }

    console.log(mainUrls);

    return mainUrls;
}