import { Field, Heading, Input, NativeSelect, Stack } from "@chakra-ui/react";

const quizSeasons = [
    "2026 Quiz Season",
    "2025 Quiz Season"
]

export default function ViewQuiz() {
    return <>
        <Heading size="5xl" paddingLeft="10" marginBottom="5">Enter Quiz</Heading>
        <Stack marginLeft="10" maxW="sm">
            <Field.Root>
                <Field.Label>Quiz Name</Field.Label>
                <Input />
            </Field.Root>
            <Field.Root>
                <Field.Label>Quiz Season</Field.Label>
                <NativeSelect.Root>
                    <NativeSelect.Field>
                        { quizSeasons.map(season => <option key={season} value={season}>{season}</option>)}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                </NativeSelect.Root>
            </Field.Root>
        </Stack>
    </>
}