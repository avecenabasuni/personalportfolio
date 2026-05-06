import re
output = "64 bytes from 23.8.1.2: icmp_seq=2572 ttl=116 time=19.806 ms"
match = re.search(r'time=(\d+\.\d+)', output)
print(match.group(1))  # 19.806