class Solution:

    def encode(self, strs: List[str]) -> str:
        result = ''
        for s in strs:
            _len_s = len(s)
            result += f'{_len_s}#{s}'
        return result


    def decode(self, s: str) -> List[str]:
        result = []
        
        i = 0
        while i < len(s):
            length_str = ''
            while s[i] != '#':
                length_str += s[i]
                i+=1
            
            length = int(length_str)

            i += 1 # skip # char
            
            substring = s[i:i + length]
            result.append(substring)

            i = i + length

        return result