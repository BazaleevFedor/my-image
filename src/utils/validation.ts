export function validation(tag: string) {
    //const pattern = /^[A-Za-z,]+(, )?[A-Za-z,]*$/;
    const pattern = /^([A-Za-z]+(, [A-Za-z]+)*)?$/;
    return pattern.test(tag);
}